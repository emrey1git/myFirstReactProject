# 👥 React Kullanıcı Kartları Uygulaması

Bu proje, **React'e yeni başlayanlar için bir component pratiği** amacıyla geliştirilmiştir. Kullanıcı bilgilerini bir component'e props yoluyla aktararak ekranda görüntülemeyi amaçlar.

---

## 🚀 Proje Özeti

Uygulama basit bir kullanıcı kartı gösterim sistemidir. İki temel bileşenden oluşur:

### 🔹 `App.jsx`

- Ana component.
- Kullanıcı bilgilerini içerir ve her biri için `<UserCard />` bileşenini çağırır.
- Props aracılığıyla `name`, `email` ve `age` verilerini aktarır.

### 🔹 `UserCard.jsx`

- Tek bir kullanıcıyı temsil eden bileşendir.
- Props ile gelen bilgileri görsel olarak render eder.

---

## 🧠 Kullanılan Teknolojiler

- **React** (Vite ile oluşturuldu)
- JSX
- Props kullanımı
- Bileşen yapısı

---

## 🧩 Kullanıcı Arayüzü

```txt
---------------------
|  Emre Yılmaz     |
|  emre@example.com|
|  Yaş: 25         |
---------------------

---------------------
|  Ayşe Demir      |
|  ayse@example.com|
|  Yaş: 30         |
---------------------
