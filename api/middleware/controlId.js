import { readRecipes } from "../models/recipeModel.js";

const data = readRecipes()

const controlId = (req,res,next) => {

    // parametrede gelen eleman id'si json dosyasındaki id'ye eşitse bulundu yap. yani id tespiti yap
    const found = data?.find((i) => i.id === req.params.id)

    // eleman bulunamazsa hata gönder
    if(!found){
        return res.status(404).json({message:'aradığınız id de eleman yok'})
    }

    // req nesnesi içerisine bulunanı ekle bir sonraki adımda kullanabilmek için
    req.foundRecipe = found

    // sorun yoksa next ile yola devam
    next()

}

export default controlId