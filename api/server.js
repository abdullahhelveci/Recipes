// bu altta yazan eski export yöntemi package.json dosyasına gidip "type":"module" yazdık artık yeni yöntemi kullanıyoruz
//const express = require('express')

// 1. işlem
import express from 'express'
import cors from 'cors'
import recipeRouter from './routes/recipeRoutes.js'

// express kurulumu
const app = express()
const port = 4004

// 4. işlem) cors hatalarını önleyen mw (oto header ekler)
app.use(cors())

// 3. işlem) bodydeki json verilerini çeviren
app.use(express.json())

// 5. işlem) tarifler için crud operasyonlarını gerçekleştireceğimiz endpointleri tanımla
//* bu işlem'i yapabilmek için önce controllers dosyasına git ve orda gerekli fonksiyonları oluştur(silme,güncelleme,ekleme vb.)
//* sonrasında bir routes klasörü oluştur ve o klasörün içerisine de istek türlerinin içerisine fonksinları ekle
app.use(recipeRouter)


// 2. işlem) dinlenicek portu belirle
app.listen(port, () => {
    console.log(`server ${port}. portta çalışmaya başladı..`)
})