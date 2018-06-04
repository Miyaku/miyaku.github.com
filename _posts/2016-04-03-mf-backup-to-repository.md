---
title: Puisi untuk backup database dan semua file forum
date: 2016-04-03 17:11:12 Z
categories:
- linux
tags:
- sh
- crontab
layout: post
img: https://image.freepik.com/free-icon/computer-terminal_318-9693.jpg
author: M
comments: true
---

Hanya untuk catatan semata &#128515; &#x1f603;
Puisi bc.sh
{% highlight sh %}
#!/bin/bash
cd /usr/local/mariadb/var && git add miyui && git commit -a -m "`date`" && git push --all
cd /home/root/mifans.web.id && git add * && git add .htac* && git commit -a -m "`date`" && git push --all
{% endhighlight %}

Execute with cronjob
{% highlight sh %}
crontab -e
*/10 * * * * /root/bc.sh >/dev/null 2>&1
chmod +x bc.sh
{% endhighlight %}
Well done &#128519; &#x1f607;