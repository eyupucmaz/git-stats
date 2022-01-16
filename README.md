# Github User Lang Stats

Bu proje Atolye15'in 8. Staj Kampında yapmış olduğum github kullanıcı adına göre kullandığı dillerin yüzdesini gösterir.

### Kullandığım Teknolojiler
 - Vite
 - React
 - Axios
 - Github Api


### Kurulum

Tüm dosyaları locale aldıktan sonra proje dosyası içisine .env.local adlı bir dosya oluşturmanız gerekiyor.
```
VITE_APP_TOKEN=API_TOKEN
```
İçerisinde github api token bulunmalı. Github hesabınızdan yeni bir tane oluşturabilirsiniz.

```
npm install
npm run dev
```
Yukaridaki komutlar ile uygulamayı localde çalıştırabilirsiniz.

### Eksiklikler

- Bos veya yanlis karakter hatasi
- Uzun response suresi
- Loading ekraninda data gosterimi
- Type safety olmamasi
- Ve belki daha fazlasi :)