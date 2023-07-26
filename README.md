# Angular 
## [TR]
## Angular ile CRUD Uygulaması

Angular ile CRUD işlemlerini gerçekleştirdiğim basit sade tasarıma hakim bir CRUD APP gerçekleştirdim.
Uygulama verileri Json dosya formatında tutulmuştur ve
Json-Server kullanılarak Json dosyalarında işlem gerçekleştirilmiştir.
Tasarım için Angular Material kullanılmıştır.
Uygulamanın arayüz fotoğrafları "appInterfaceImg" adlı klasör içerisinde mevcuttur. 
## Uygulama içeriği 
* Çalışan ana verilerini oluşturma.
* Çalışan ana verilerini düzenleme.
* Çalışan ana verilerini silme.
* Çalışan ana verilerini listeleme.
* Çalışan ana verilerini filtreleme

Mevcut uygulamayı tarayıcıda açar.
`ng serve -o `
Mevcut json dosyasını Json-server ile local üzerinden ayağa kaldırır.
`json-server --watch db.json`

Yukarıda bulunan kodları çalıştırabilmek için bilgisayarınızda node, angular ve json-server kurulu olmak zorundadır. 

## [ENG]
## CRUD Application with Angular

I've created a simple CRUD APP with Angular, where the application data is stored in JSON format. JSON-Server is used to perform operations on JSON files. The design is implemented using Angular Material. The interface images of the application are located in the "appInterfaceImg" folder.
## Application content
* Create employee main data.
* Edit employee main data.
* Delete employee main data.
* List employee main data.
* Filter employee main data.

Opens the current application in the browser.
`ng serve -o `
It stands up the existing json file with Json-server over local.
`json-server --watch db.json`

In order to run the above code, you must have Node, Angular, and JSON-Server installed on your computer.



