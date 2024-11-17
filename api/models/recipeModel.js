import fs from 'fs'


// aldığı dosyayı olur ve json formatından javascript formatına dönüştürür
export const readRecipes = () => {
   try {
    const text = fs.readFileSync(`./data.json`,'utf-8')
   const data = JSON.parse(text)

   return data
   } catch (error) {
    console.log(error)
   }
}

// param olarak aldığı veriyi json dosyasına yazar 
export const writeRecipes = (data) => {
    try {
         fs.writeFileSync('./data.json',JSON.stringify(data))
       } catch (error) {
        console.log(error)
       }
}