---
layout: post
title:  "Android tidak membutuhkan task killer karena"
date:   2017-02-17 10:41:11 -0700
img: "/assets/images/post/ataskiller.jpg"
comments: true
author: "inisial M"
categories: Android
---
<img src="/assets/images/post/ataskiller.jpg"><br />
Perlu diingat, Android based on Linux, bukan windows, cara kerja, pengaturan, serta manajemennya juga berbeda karena berbeda sistem operasi sistem.

Hal yang perlu diingat adalah
1) Android/Linux itu semua tentang efisiensi.
2) Android mengganggap RAM itu adalah Sumber daya (Resource) yang harus digunakan.
3) Android memiliki AutoKiller Saat Low memory atau LMK.

Konsep pemakaian memori Linux adalah semua tentang efisiensi. RAM adalah sumber daya yang harus digunakan, 100% jika memungkinkan, sepanjang waktu (jika memungkinkan).

Linux menggunakan RAM yang tidak digunakan untuk cache data dan filesystem meta-data dari perangkat penyimpanan lambat (Flash atau disk)

Karena mengambil informasi dari RAM jauh lebih cepat: Tidak ada hambatan (bottleneck) seperti media fisik lambat, slow buses or device clocks, dan tidak memerlukan dekompresi.

Dekompresi : tiap aplikasi di android itu adalah compiled java within compressed zip. Jadi apk harus di dekompresi, sebelum aplikasi siap untuk di ekseskusi

<b>LOGIKA KERJA RAM LINUX</b>
Ram : Meja Kerja
CPU : Pegawai
Isi RAM : Barang-barang / Peralatan

Contoh:
<pre>
Seorang pegawai (CPU), dia kerjanya mengatur, pendataan, stempel, dan tanda tangan, mana yang lebih baik??
1. Meja kerja pegawai tsb diisi penuh oleh barang2 yang sering dia pakai, kaya pulpen, scanner, printer, stempel, agar dia semakin cepat mengerjakan kerjaannya, semakin besar meja (RAM), semakin baik kerjanya..
atau
2. Meja kerjanya kosong, dan dia harus ambil pulpen ke tempat pengadaan pulpen, mau scan harus ke scanner di ujung kantor, mau nge-print harus jalan dulu ke printer.
</pre>
No.1 adalah cara kerja Android/Linux

Kembali lagi ke tulisan atas : Linux/Android itu semua tentang efisiensi.
Android menganggap RAM itu resource yang harus digunakan, 100% klo emang bisa.

<b>HUBUNGAN RAM BATTERAI</b>

RAM usage tidak mempengaruhi batterai
<pre>
1. Mengisi RAM itu diatur oleh Memory Controller BUKAN CPU/APU.
2. Apapun yang di store di memory, digunakan atau tidak, tidak mengaktifkan CPU/APU, tapi oleh memory controller chip.
3. Semakin sedikit FREE RAM di android semakin cepat, karena semua resource yang ada sudah tersedia di RAM, jadi tinggal panggil address resource di ram, tidak perlu mencari lalu me-load frameworks/bitmap/vector/content
</pre>
<blockquote>The amount of data you hold in memory doesn't influence the battery life as the complete memory has to be refreshed all the time,
whether you store something there or not (the memory controller doesn't know whether a part is "unused").</blockquote>

<b>LOGIKA </b>
RAM : Meja Kerja
CPU : Pegawai
Isi RAM : Barang-barang / Peralatan
Sekretaris : Memory Controller

<i>karena sekretaris tau apa yang sering pegawai pakai, oleh sekretaris meja kerja diisi barang2 yang sering digunakan.. pegawainya (cpu) ya tinggal pakai aja</i>

<b>LMK</b>
Android sendiri sudah memiliki LMK (Low Memory Killer) untuk mengatur kebutuhan memory. Di dalam LMK ini ada 6 pembagian untuk pengaturan task killer, yaitu:

FOREGROUND_APP : Aplikasi yang ada aktif dilayar saat ini.<br />
VISIBLE_APP : Aplikasi yang hidup dan berjalan di background karena masih melakukan sesuatu.<br />
SECONDARY_SERVER : sebuah proses/service yang dibutuhkan aplikasi yang sedang berjalan.<br />
HIDDEN_APP<br />
CONTENT_PROVIDER<br />
EMPTY_APP<br />

Walaupun sudah diatur oleh system, tapi kita bisa mengaturnya sendiri. Setiap Handset mempunyai setting LMK yang berbeda-beda.
-----------------------------

Why Does Android Not Need Task Killers?
<pre>
1. Android secara otomatis membunuh tugas ketika lebih banyak memori yang dibutuhkan.
2. Android secara otomatis membunuh tugas bila melakukan apa yang perlu dilakukan.
3. Android secara otomatis membunuh tugas ketika Anda tidak kembali untuk itu dalam waktu yang lama.
4. Kebanyakan layanan (sementara mungkin berjalan di latar belakang) menggunakan sedikit memori ketika tidak aktif melakukan sesuatu.
5. Membunuh proses tertentu dapat memiliki efek samping yang tidak diinginkan. Tidak menerima pesan teks, alarm tidak akan mati, dan memaksa menutup hanya untuk beberapa nama.
6. Kebanyakan Aplikasi akan keluar dengan sendirinya apabila user menekan tombol "back"
7. Jika menekan Home, Android akhirnya akan membunuhnya setelah itu berada di latar belakang untuk sementara waktu.
</pre>
What Should We Do : Let Android handle tasks itself.

<i>Source Google & Reader with me</i>