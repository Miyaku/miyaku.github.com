---
title: Android tidak membutuhkan task killer karena
date: 2017-02-17 17:41:11 Z
categories:
- Android
tags:
- Linux
layout: post
img: "https://miyaku.github.io/assets/images/post/ataskiller.jpg"
comments: true
author: inisial M
---


Perlu diingat, Android based on <b>Linux,</b> <u>bukan</u> windows, cara kerja, pengaturan, serta manajemennya juga berbeda karena berbeda sistem operasi sistem.<br />
<br />
Hal yang perlu diingat adalah:<br />
<ol>
<li>Android/Linux itu semua tentang efisiensi.</li>
<li>&nbsp;Android mengganggap RAM itu adalah Sumber daya (Resource) yang harus digunakan.</li>
<li>&nbsp;Android memiliki AutoKiller Saat Low memory atau LMK.</li>
</ol>


<b>Konsep pemakaian memori Linux adalah semua tentang efisiensi.</b><br />
RAM adalah sumber daya yang harus digunakan 100% jika memungkinkan, sepanjang waktu (jika memungkinkan).<br />
<br />
Linux menggunakan RAM yang tidak digunakan cache data dan filesystem meta-data dari perangkat penyimpanan lambat (Flash atau disk), karena mengambil informasi dari RAM jauh lebih cepat dan tidak ada hambatan (bottleneck) seperti media fisik lambat, slow buses or device clocks, serta tidak memerlukan dekompresi.<br />
<br />
Dekompresi : setiap aplikasi di android itu adalah compiled java within compressed zip. Jadi apk harus di dekompresi, sebelum aplikasi siap untuk di ekseskusi.<br />
<br />
<b>LOGIKA KERJA RAM LINUX</b><br />
<i>Jika...</i><br />
Ram = Meja Kerja<br />
CPU = Pegawai<br />
Isi RAM = Barang-barang / Peralatan<br />
<br />
<b>Contoh</b><br />
Seorang pegawai (CPU) dia kerjanya mengatur, pendataan, stempel, dan tanda tangan, mana yang lebih baik??<br />
<br />
<b>A)</b> Meja kerja pegawai tsb diisi penuh oleh barang2 yang sering dia pakai, seperti pulpen, scanner, printer, stempel, agar dia semakin cepat mengerjakan kerjaannya, semakin besar meja (RAM), semakin baik kerjanya..
atau<br />
<br />
<b>B)</b> Meja kerjanya kosong, dan dia harus ambil pulpen ke tempat pengadaan pulpen, mau scan harus ke scanner di ujung kantor, mau nge-print harus jalan dulu ke printer.<br />
<br />
<b>A</b> adalah cara kerja Android/Linux<br />
<br />
Kembali lagi ke tulisan atas : Linux/Android itu semua tentang efisiensi.
Android menganggap RAM itu resource yang harus digunakan, 100% kalau emang bisa.

<b>&nbsp;</b><br />
<br />
<br />
<b>HUBUNGAN RAM &amp; BATTERAI</b><br />
RAM usage tidak mempengaruhi batterai

<br />
<ol>
<li>Mengisi RAM itu diatur oleh Memory Controller BUKAN CPU/APU.&nbsp;</li>
<li>Apapun yang di store di memory, digunakan atau tidak, tidak mengaktifkan CPU/APU, tapi oleh memory controller chip.</li>
<li>Semakin sedikit FREE RAM di android semakin cepat, karena semua resource yang ada sudah tersedia di RAM, jadi tinggal panggil address resource di ram, tidak perlu mencari lalu me-load frameworks/bitmap/vector/content&nbsp; </li>
</ol>
<blockquote>
The amount of data you hold in memory doesn't influence the battery life as the complete memory has to be refreshed all the time,
whether you store something there or not (the memory controller doesn't know whether a part is "unused").</blockquote>
<b>SO LOGIKANYA</b><br />
<br />
RAM = Meja Kerja,
CPU = Pegawai,
Isi RAM = Barang-barang/Peralatan,
Sekretaris = Memory Controller

<i>karena sekretaris tau apa yang sering pegawai pakai, oleh sekretaris meja kerja diisi barang2 yang sering digunakan.. pegawainya (cpu) ya tinggal pakai aja</i>. <br />
<br />
<b>LMK</b><br />
&nbsp;Android sendiri sudah memiliki LMK (Low Memory Killer) untuk mengatur kebutuhan memory. Di dalam LMK ini ada 6 pembagian untuk pengaturan task killer, yaitu:<br />
<br />
<i>FOREGROUND_APP</i> : Aplikasi yang ada aktif dilayar saat ini.<br />
<i>VISIBLE_APP</i> : Aplikasi yang hidup dan berjalan di background karena masih melakukan sesuatu.<br />
<i>SECONDARY_SERVER</i> : sebuah proses/service yang dibutuhkan aplikasi yang sedang berjalan.<br />
<i>HIDDEN_APP</i><br />
<i>CONTENT_PROVIDER</i><br />
<i>EMPTY_APP</i><br />
<br />
Walaupun sudah diatur oleh system, tapi kita bisa mengaturnya sendiri.<br />
Setiap DEvices mempunyai setting LMK yang berbeda-beda.<br />
<br />
Why Does Android Not Need Task Killers?
<br />
<pre>1. Android secara otomatis membunuh tugas ketika lebih banyak memori yang dibutuhkan.
2. Android secara otomatis membunuh tugas bila melakukan apa yang perlu dilakukan.
3. Android secara otomatis membunuh tugas ketika Anda tidak kembali untuk itu dalam waktu yang lama.
4. Kebanyakan layanan (sementara mungkin berjalan di latar belakang) menggunakan sedikit memori ketika tidak aktif melakukan sesuatu.
5. Membunuh proses tertentu dapat memiliki efek samping yang tidak diinginkan. Tidak menerima pesan teks, alarm tidak akan mati, dan memaksa menutup hanya untuk beberapa nama.
6. Kebanyakan Aplikasi akan keluar dengan sendirinya apabila user menekan tombol "back"
7. Jika menekan Home, Android akhirnya akan membunuhnya setelah itu berada di latar belakang untuk sementara waktu.
</pre>
What Should We Do : Let Android handle tasks itself.

<i>Source Google &amp; Reader with me</i>