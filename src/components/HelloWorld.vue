<script setup>
import { ref } from 'vue'
import {WalletHandler, FileIo, StorageHandler, getFileTreeData, FileUploadHandler} from 'jackal.js'

import {mainnet} from './testnetConfig'
import {local} from './localConfig.js'
import {testnet} from './testnetConfig'
import * as Interface from '../../helpers/interface';


const count = ref(0)

let fid = ref("waiting for upload...")

let wallet = ref({})
let data = ref([])

let fileIo = null

const connectWallet = async function() {

  const walletConfig = {
    selectedWallet: 'keplr',
    ...local
  }

  // 
  window.keplr.experimentalSuggestChain(local.chainConfig)

  // Hooking up the wallet to your app
  wallet.value = await WalletHandler.trackWallet(walletConfig)

  fileIo = await FileIo.trackIo(wallet.value, '1.0.9')

  const listOfFolders = ["publish-demo"] 

  // you can create as many folders as you would like this way

  // The first time a user connects, they must init the system
  const storage = await StorageHandler.trackStorage(wallet.value)
  const msg0 = storage.makeStorageInitForWasmMsg()
  await fileIo.generateInitialDirs(msg0, listOfFolders)

  const listFiles = await fileIo.downloadFolder("s/publish-demo")
  const files = listFiles.folderDetails.fileChildren
  console.log("==========================")
  console.log(files)

  let d = []

  let x = 0
  for (const key of Object.keys(files)) {
    const f = files[key]

    const fDetails = await getFileTreeData("s/publish-demo/" + f.name, wallet.value.getJackalAddress(), wallet.value.getQueryHandler())
    const fidList = JSON.parse(fDetails.value.files.contents)
    const newFid = fidList.fids[0]

    d[x] = {name: key, fid: newFid}
    x ++
  }

  console.log("logging data d below")
  console.log(d)
  data.value = d

}

const uploadFile = async function (file) {

  const parentFolderPath = "s/publish-demo" // replace with your own path
  const fileName = file.name // replace with your own file name 
  const handler = await FileUploadHandler.trackFile(file, parentFolderPath)

  fileIo = await FileIo.trackIo(wallet.value, '1.0.9')

  const parent = await fileIo.downloadFolder(parentFolderPath)
  console.log(parent)
  const uploadList = {}
  uploadList[fileName] = {
    data: null,
    exists: false,
    handler: handler,
    key: fileName,
    uploadable: await handler.getForPublicUpload()
  }

  const details = await fileIo.staggeredUploadFiles(uploadList, parent, {counter: 0, complete: 0})
  console.log(details)

  const f = await getFileTreeData("s/publish-demo/" + file.name, wallet.value.getJackalAddress(), wallet.value.getQueryHandler())

  const fidList = JSON.parse(f.value.files.contents)
  const newFid = fidList.fids[0]
  console.log(newFid)
  fid.value = newFid

}

const deleteFile = async function (confirmation) {
  const parentFolderPath = "s/publish-demo" 

  fileIo = await FileIo.trackIo(wallet.value, '1.0.9')

  const parent = await fileIo.downloadFolder(parentFolderPath)
  const deleted = await fileIo.deleteTargets([confirmation], parent)

}


const onChange = function (e) {
  const files = e.target.files
  console.log(files)
  uploadFile(files[0])
}

const goToFID = function () {
 console.log("going to fid")
}


const yeet = async function() {
  await connectWallet().catch(err => console.warn(err))
}

const promptDeleteConfirmation = async function() {
  const confirmation = window.prompt('Please enter the name of the file to delete:')
  if (confirmation !== null) {
    await deleteFile(confirmation)
  }
}


</script>


<template>


  <p>{{ "it's Bi" }}</p>

  <div class="card" >
    <button type="button" @click="yeet()">{{wallet.value ? "Connected" : "Connect Wallet"}}</button>
      <h3>Upload images</h3>
      <div class ="dropbox">
      <input type="file" class="input-file" @change="onChange">
      </div>
      <button type="button" @click="promptDeleteConfirmation()">{{wallet.value ? "Connected" : "Delete"}}</button>
  </div>

</template>


