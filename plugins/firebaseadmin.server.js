import { defineNuxtPlugin  } from '#app'
import { initializeApp, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'


export default defineNuxtPlugin(async (nuxtApp) => {
    const apps = getApps()
    if(!apps.length) initializeApp()
    const firestoreDb = getFirestore()
    if(!apps.length){
        firestoreDb.settings({
            host: "localhost:8080",
            ssl: false
        })
    }
    
    nuxtApp.provide('firebase', {
        firestore: firestoreDb
    })
})