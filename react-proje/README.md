# 🛍️ Ürün Kartları Listesi React Uygulaması

Bu küçük React alıştırması, **dinamik olarak oluşturulan ürün kartları** (“Product Cards”) bileşenleri ile çalışmanızı sağlar. React’in temel bileşen yapısını, props ile veri aktarımını ve CSS ile düzenlemeyi pekiştirmek için tasarlanmıştır.

---

## 🚀 Proje Özeti

- **App.jsx**  
  - Uygulamanın giriş noktasıdır.  
  - Ürün verilerini bir dizi (`products`) içerisinde tanımlar.  
  - `.map()` metodu ile her bir ürün nesnesi için `<ProductCard />` bileşeni oluşturur.  

- **ProductCard.jsx**  
  - Tek bir ürün kartını temsil eden fonksiyonel bileşendir.  
  - `props` aracılığıyla gelen `productName`, `price` ve `alt` (açıklama) değerlerini alır ve görsel olarak render eder.  

- **CSS Düzeni**  
  - `flex` kullanarak kartlar yatayda ve dikeyde hizalanır.  
  - Kartlar arasında boşluk yaratılır, hover efekti ve hafif “öne gelme” animasyonu uygulanır.  
  - Başlık ve içerik metinleri, `.card-content` gibi yardımcı sınıflarla ortalanır.

---

## 📦 Teknolojiler ve Araçlar

- **React** (Fonksiyonel bileşenler & Hooks yok – sadece props)  
- **Vite** (hızlı geliştirme sunucusu ve paketleme)  
- **JavaScript (ES6+) & JSX**  
- **CSS3** (Flexbox, geçiş animasyonları)

---

## 🔧 Kurulum & Çalıştırma

1. **Repo’yu klonlayın**  
   ```bash
   git clone https://github.com/kullanici-adi/urun-kartlari-listesi.git
   cd urun-kartlari-listesi
