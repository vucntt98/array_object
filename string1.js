const content = `<item>
<title>Sắc vóc tuổi 45 của 'bom sex' Lâm Chí Linh</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/giai-tri/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-3934776.html"><img width=130 height=100 src="https://i-giaitri.vnecdn.net/2019/06/06/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-1559812086_180x108.jpg" ></a></br>Người mẫu kiêm diễn viên Đài Loan được fan khen nóng bỏng qua loạt ảnh quảng cáo nội y mới.
]]>
</description>
<pubDate>Thu, 06 Jun 2019 19:00:00 +0700</pubDate>
<link>
https://vnexpress.net/giai-tri/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-3934776.html
</link>
<guid>
https://vnexpress.net/giai-tri/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-3934776.html
</guid>
<slash:comments>0</slash:comments>
</item>`;



const m= (a,b)=>{
    let k =content.indexOf(a)
    let v =content.indexOf(b)

    let title=content.slice(k + a.length,v)
    console.log(title);
}
m('<title>','</title>') ;
m('<description>','</description>');
// console.log(m(,));
// console.log(m());