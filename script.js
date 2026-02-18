function filterCards() {
  const input = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(input) ? '': 'none';
  });
}
function hitungpp() {
  let a = document.getElementById("panjang");
  let b = document.getElementById("lebar");
  const consol = document.getElementById("hasilpp");
  let select = document.getElementById("ukuran");
  let consolSatuan = document.getElementById("consoleSatuan4")
  let consolSatuan1 = document.getElementById("consoleSatuan5");
  let bulatkan = document.getElementById("bulatkan").value;

  consolSatuan.innerText = select.value;
  consolSatuan1.innerText = select.value;

  if (bulatkan === "ya") {
    consol.innerHTML = Math.round((Number(a.value) * Number(b.value))) + " " + select.value + "<sup>2</sup>";
  } else {
    consol.innerHTML = (Number(a.value) * Number(b.value)) + " " + select.value + "<sup>2</sup>";
  }
}
function hitungp() {
  let bulatkan = document.getElementById("bulatkan").value;
  let consol = document.getElementById("hasilp");
  let select = document.getElementById("ukuran");
  let consolSatuan = document.getElementById("consoleSatuan");
  let satuan = select.value;
  let a = document.getElementById("sisi1p");
  let hasil = Math.pow(a.value, 2);

  consolSatuan.innerText = satuan;
  if (bulatkan === "ya") {
    consol.innerHTML = Math.round(hasil) + " " + satuan + "<sup>2</sup>";
  } else {
    consol.innerHTML = hasil + " " + satuan + "<sup>2</sup>";
  }
}
function hitungk() {
  let bulatkan = document.getElementById("bulatkan").value;
  let a = document.getElementById("sisi1");
  let select = document.getElementById("ukuran");
  let consol = document.getElementById("hasilk");
  let hasil = Math.pow(Number(a.value), 3);
  let hasilBulat = Math.round(hasil);
  let satuan = select.value;
  let consolSatuan = document.getElementById("consoleSatuan10");

  consolSatuan.innerText = select.value;

  if (bulatkan === "ya") {
    consol.innerHTML = hasilBulat + " " + satuan + "<sup>3</sup>";
  } else {
    consol.innerHTML = hasil + " " + satuan + "<sup>3</sup>";
  }
}
function hitungLuasLingkaran() {
  let bulatkan = document.getElementById("bulatkan");
  let select = document.getElementById("ukuran");
  let selectPhi = document.getElementById("ukuranPhi");
  let Phi = selectPhi.value;
  let jari = document.getElementById("jari1");
  let consol = document.getElementById("hasilLuasLingkaran");
  let consolSatuan = document.getElementById("consoleSatuan6");
  let hasil = (22/7) * (Number(jari.value) * Number(jari.value));
  let hasil1 = 3.14159 * (Number(jari.value) * Number(jari.value));
  let hasil2 = 3.14 * (Number(jari.value) * Number(jari.value));

  consolSatuan.innerText = select.value;
  if (bulatkan === "ya") {
    if (Phi === "duapertuju") {
      consol.innerHTML = Math.round(hasil) + " " + select.value + "<sup>2</sup>";
    } else if (Phi === "tigakomaempat") {
      consol.innerHTML = Math.round(hasil1) + " " + select.value + "<sup>2</sup>";
    } else if (Phi === "tigakoma") {
      consol.innerHTML = Math.round(hasil2) + " " + select.value + "<sup>2</sup>";
    }
  } else {
    if (Phi === "duapertuju") {
      consol.innerHTML = hasil + " " + select.value + "<sup>2</sup>";
    } else if (Phi === "tigakomaempat") {
      consol.innerHTML = hasil1 + " " + select.value + "<sup>2</sup>";
    } else if (Phi === "tigakoma") {
      consol.innerHTML = hasil2 + " " + select.value + "<sup>2</sup>";
    }
  }
}
function hitungbalok() {
  let bulatkan = document.getElementById("bulatkan");
  let a = document.getElementById("panjangbalok");
  let b = document.getElementById("lebarbalok");
  let c = document.getElementById("tinggibalok");
  let select = document.getElementById("ukuran");
  const consol = document.getElementById("hasilbalok");
  let hasil = (Number(a.value) * Number(b.value) * Number(c.value));
  let satuan = select.value;
  let consolSatuan = document.getElementById("consoleSatuan13")
  let consolSatuan1 = document.getElementById("consoleSatuan14")
  let consolSatuan2 = document.getElementById("consoleSatuan15")

  consolSatuan.innerText = select.value;
  consolSatuan1.innerText = select.value;
  consolSatuan2.innerText = select.value;

  if (bulatkan === "ya") {
    consol.innerHTML = Math.round(hasil) + " " + satuan + "<sup>3</sup>";
  } else {
    consol.innerHTML = hasil + " " + satuan + "<sup>3</sup>";
  }
}
function hitungBola() {
  let jari2 = document.getElementById("jari2");
  let bulatkan = document.getElementById("bulatkan").value;
  let selectPhi1 = document.getElementById("ukuranPhi1");
  let Phi1 = selectPhi1.value;
  let select = document.getElementById("ukuran");
  let consol = document.getElementById("hasilbola");
  let consolSatuan = document.getElementById("consoleSatuan16");
  const hasil = ((4/3) * (22/7)) * Math.pow(jari2.value, 3);
  const hasil1 = ((4/3) * 3.14159) * Math.pow(jari2.value, 3);
  const hasil2 = ((4/3) * 3.14) * Math.pow(jari2.value, 3);

  consolSatuan.innerText = select.value;

  if (bulatkan === "ya") {
    if (Phi1 === "duatuju") {
      consol.innerHTML = Math.round(hasil) + " " + select.value + "<sup>3</sup>";
    } else if (Phi1 === "tigaempat") {
      consol.innerHTML = Math.round(hasil1) + " " + select.value + "<sup>3</sup>";
    } else if (Phi1 === "tigakom") {
      consol.innerHTML = Math.round(hasil2) + " " + select.value + "<sup>3</sup>";
    }
  } else {
    if (Phi1 === "duatuju") {
      consol.innerHTML = ((4/3) * (22/7)) * Math.pow(jari2.value, 3) + " " + select.value + "<sup>3</sup>";
    } else if (Phi1 === "tigaempat") {
      consol.innerHTML = ((4/3) * 3.14159) * Math.pow(jari2.value, 3) + " " + select.value + "<sup>3</sup>";
    } else if (Phi1 === "tigakom") {
      consol.innerHTML = ((4/3) * 3.14) * Math.pow(jari2.value, 3) + " " + select.value + "<sup>3</sup>";
    }
  }
}
function hitungluassegitiga() {
  let alas = document.getElementById("alassegitiga");
  let tinggi = document.getElementById("tinggisegitiga");
  let a = alas.value;
  let t = tinggi.value;
  let consol = document.getElementById("hasilluassegitiga");
  let select = document.getElementById("ukuran");
  let satuan = select.value;
  let consolSatuan = document.getElementById("consoleSatuan2");
  let consolSatuan1 = document.getElementById("consoleSatuan3");
  let bulatkan = document.getElementById("bulatkan").value;

  consolSatuan.innerText = select.value;
  consolSatuan1.innerText = select.value;

  if (bulatkan === "ya") {
    consol.innerHTML = Math.round((a * t) / 2) + " " + satuan;
  } else {
    consol.innerHTML = (a * t) / 2 + " " + satuan;
  }
}
function bukapersegi() {
  let openp = document.getElementById("mulaip");
  let closep = document.getElementById("tutupp");
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let p = document.getElementById("persegi");
  let pp = document.getElementById("persegipanjang");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let balok = document.getElementById("balok");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegi.style.display = "none";
  opens.style.display = "flex";
  closes.style.display = "none";
  segitiga.style.display = "none";
  balok.style.display = "none";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  openp.style.display = "none";
  closep.style.display = "flex";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  p.style.display = "flex";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutuppersegi() {
  let openpersegi = document.getElementById("mulaip");
  let closepersegi = document.getElementById("tutupp");
  let persegi = document.getElementById("persegi");

  openpersegi.style.display = "flex";
  closepersegi.style.display = "none";
  persegi.style.display = "none";
}
function bukapersegipanjang() {
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let openp = document.getElementById("mulaipp");
  let closep = document.getElementById("tutuppp");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let balok = document.getElementById("balok");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  opens.style.display = "flex";
  closes.style.display = "none";
  segitiga.style.display = "none";
  balok.style.display = "none";
  openper.style.display = "flex";
  closeper.style.display = "none";
  openp.style.display = "none";
  closep.style.display = "flex";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  pp.style.display = "flex";
  p.style.display = "none";
  luasLing.style.display = "none";
}
function tutuppersegipanjang() {
  let openp = document.getElementById("mulaipp");
  let closep = document.getElementById("tutuppp");
  let p = document.getElementById("persegipanjang");
  openp.style.display = "flex";
  closep.style.display = "none";
  p.style.display = "none";
}
function bukakubus() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let openp = document.getElementById("mulaik");
  let closep = document.getElementById("tutupk");
  let k = document.getElementById("kubus");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let balok = document.getElementById("balok");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  opens.style.display = "flex";
  closes.style.display = "none";
  segitiga.style.display = "none";
  balok.style.display = "none";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openp.style.display = "none";
  closep.style.display = "flex";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  k.style.display = "flex";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupkubus() {
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");

  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
}
function bukaLuasLing() {
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let pp = document.getElementById("persegipanjang");
  let per = document.getElementById("persegi");
  let p = document.getElementById("luasLingkaran");
  let balok = document.getElementById("balok");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  opens.style.display = "flex";
  closes.style.display = "none";
  segitiga.style.display = "none";
  balok.style.display = "none";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "none";
  closeLuasLing.style.display = "flex";
  p.style.display = "flex";
  per.style.display = "none";
  pp.style.display = "none";
}
function tutupLuasLing() {
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let p = document.getElementById("luasLingkaran");
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  p.style.display = "none";
}
function bukabalok() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let openp = document.getElementById("mulaibalok");
  let closep = document.getElementById("tutupbalok");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  opens.style.display = "flex";
  closes.style.display = "none";
  segitiga.style.display = "none";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openp.style.display = "none";
  closep.style.display = "flex";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "flex";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupbalok() {
  let openp = document.getElementById("mulaibalok");
  let closep = document.getElementById("tutupbalok");
  let balok = document.getElementById("balok");
  balok.style.display = "none";
  openp.style.display = "flex";
  closep.style.display = "none";
}
function bukabola() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let openp = document.getElementById("mulaibola");
  let closep = document.getElementById("tutupbola");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let bola = document.getElementById("bola");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  kelilingPersegi.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  opens.style.display = "flex";
  closes.style.display = "none";
  segitiga.style.display = "none";
  bola.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openp.style.display = "none";
  closep.style.display = "flex";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupbola() {
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");

  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
}
function bukaluassegitiga() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let segitiga = document.getElementById("luassegitiga");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  segitiga.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupluassegitiga() {
  let openp = document.getElementById("mulailuassegitiga");
  let closep = document.getElementById("tutupluassegitiga");
  let segitiga = document.getElementById("luassegitiga");
  segitiga.style.display = "none";
  openp.style.display = "flex";
  closep.style.display = "none";
}

setInterval(hitungk, 0);
setInterval(hitungBola, 0);
setInterval(hitungp, 0);
setInterval(hitungpp, 0);
setInterval(hitungLuasLingkaran, 0);
setInterval(hitungluassegitiga, 0);
setInterval(hitungbalok, 0);
setInterval(kelilingPersegi, 0);
setInterval(kelilingPersegiPanjang, 0);
setInterval(kelilingSegitiga, 0);
setInterval(kelilingLingkaran, 0);
setInterval(hitungA, 0);
setInterval(tabung, 0);
setInterval(pecahan, 0);

function kelilingPersegi() {
  let ukuran = document.getElementById("ukuran");
  let satuan = ukuran.value;
  let sisi = document.getElementById("sisi");
  let consol = document.getElementById("hasilKelilingPersegi");
  let consolSatuan = document.getElementById("consoleSatuan7")
  let bulatkan = document.getElementById("bulatkan").value;

  consolSatuan.innerHTML = satuan;

  if (bulatkan === "ya") {
    consol.innerHTML = Math.round(Number(sisi.value) * 4) + " " + satuan;
  } else {
    consol.innerHTML = Number(sisi.value) * 4 + " " + satuan;
  }
}
function kelilingPersegiPanjang() {
  let bulatkan = document.getElementById("bulatkan").value;
  let ukuran = document.getElementById("ukuran");
  let satuan = ukuran.value;
  let panjang = document.getElementById("panjang1");
  let lebar = document.getElementById("lebar1");
  let consol = document.getElementById("hasilKelilingPersegiPanjang");
  let consolSatuan = document.getElementById("consoleSatuan8");
  let consolSatuan1 = document.getElementById("consoleSatuan9");
  let hasil = (Number(panjang.value) + Number(lebar.value)) * 2;

  consolSatuan.innerText = ukuran.value;
  consolSatuan1.innerText = ukuran.value;

  if (bulatkan === "ya") {
    consol.innerHTML = Math.round(hasil) + " " + satuan;
  } else {
    consol.innerHTML = hasil + " " + satuan;
  }
}
function kelilingLingkaran() {
  let ukuran = document.getElementById("ukuran");
  let satuan = ukuran.value;
  let jari = document.getElementById("jari3");
  let ukuranPhi = document.getElementById("ukuranPhi2");
  let Phi = ukuranPhi.value
  let duatuju = (2 * (22/7)) * Number(jari.value);
  let tigakomaempat = (2 * 3.14159) * Number(jari.value);
  let tigakoma = (2 * 3.14) * Number(jari.value);
  let consol = document.getElementById("hasilKelilingLingkaran");
  let bulatkan = document.getElementById("bulatkan").value;
  let consolSatuan = document.getElementById("consoleSatuan11");

  consolSatuan.innerHTML = satuan;

  if (bulatkan === "ya") {
    if (Phi === "duatuju") {
      consol.innerHTML = Math.round(duatuju) + " " + satuan;
    } else if (Phi === "tigaempat") {
      consol.innerHTML = Math.round(tigakomaempat) + " " + satuan;
    } else if (Phi === "tigakom") {
      consol.innerHTML = Math.round(tigakoma) + " " + satuan;
    }
  } else {
    if (Phi === "duatuju") {
      consol.innerHTML = duatuju + " " + satuan;
    } else if (Phi === "tigaempat") {
      consol.innerHTML = tigakomaempat + " " + satuan;
    } else if (Phi === "tigakom") {
      consol.innerHTML = tigakoma + " " + satuan;
    }
  }
}
function tabung() {
  let ukuran = document.getElementById("ukuran");
  let satuan = ukuran.value;
  let jari = document.getElementById("jari4").value;
  let ukuranPhi = document.getElementById("ukuranPhi3");
  let tinggi = document.getElementById("tinggi");
  let Phi = ukuranPhi.value
  let duatuju = (22/7) * Math.pow(Number(jari), 2) * Number(tinggi.value);
  let tigakomaempat = 3.14159 * Math.pow(Number(jari), 2) * Number(tinggi.value);
  let tigakoma = 3.14 * Math.pow(Number(jari), 2) * Number(tinggi.value);
  let consol = document.getElementById("hasilTabung");
  let bulatkan = document.getElementById("bulatkan").value;
  let consolSatuan = document.getElementById("consoleSatuan12");
  let consolSatuan1 = document.getElementById("consoleSatuan20");

  consolSatuan.innerHTML = satuan;
  consolSatuan1.innerHTML = satuan;

  if (bulatkan === "ya") {
    if (Phi === "duatuju") {
      consol.innerHTML = Math.round(duatuju) + " " + satuan + "<sup>3</sup>";
    } else if (Phi === "tigaempat") {
      consol.innerHTML = Math.round(tigakomaempat) + " " + satuan + "<sup>3</sup>";
    } else if (Phi === "tigakom") {
      consol.innerHTML = Math.round(tigakoma) + " " + satuan + "<sup>3</sup>";
    }
  } else {
    if (Phi === "duatuju") {
      consol.innerHTML = duatuju + " " + satuan + "<sup>3</sup>";
    } else if (Phi === "tigaempat") {
      consol.innerHTML = tigakomaempat + " " + satuan + "<sup>3</sup>";
    } else if (Phi === "tigakom") {
      consol.innerHTML = tigakoma + " " + satuan + "<sup>3</sup>";
    }
  }
}
function pecahan() {
  let p1 = document.getElementById("angkaPecahan1");
  let p2 = document.getElementById("angkaPecahan2");
  let p3 = document.getElementById("angkaPecahan3");
  let p4 = document.getElementById("angkaPecahan4");
  let tambah = (Number(p1.value) / Number(p2.value)) + (Number(p3.value) / Number(p4.value));
  let kurang = (Number(p1.value) / Number(p2.value)) - (Number(p3.value) / Number(p4.value));
  let bagi = (Number(p1.value) / Number(p2.value)) / (Number(p3.value) / Number(p4.value));
  let kali = (Number(p1.value) / Number(p2.value)) * (Number(p3.value) / Number(p4.value));
  let tipePecahan = document.getElementById("tipePecahan").value;
  let consolTipePecahan = document.getElementById("consolTipePecahan");
  let consol = document.getElementById("hasilPecahan");

  if (!p1.value || !p2.value || !p3.value || !p4.value) {
    consol.innerHTML = "0";
    consolTipePecahan.innerHTML = tipePecahan;
  } else {
    if (tipePecahan === "+") {
      consol.innerHTML = tambah;
      consolTipePecahan.innerHTML = "+";
    } else if (tipePecahan === "-") {
      consol.innerHTML = kurang;
      consolTipePecahan.innerHTML = "-";
    } else if (tipePecahan === "÷") {
      consol.innerHTML = bagi;
      consolTipePecahan.innerHTML = "÷";
    } else if (tipePecahan === "x") {
      consol.innerHTML = kali;
      consolTipePecahan.innerHTML = "x";
    }
  }
}
function kelilingSegitiga() {
  let bulatkan = document.getElementById("bulatkan").value;
  let ukuran = document.getElementById("ukuran");
  let satuan = ukuran.value;
  let a = document.getElementById("sisiA");
  let b = document.getElementById("sisiB");
  let c = document.getElementById("sisiC");
  let hasil = Number(a.value) + Number(b.value) + Number(c.value);
  let consol = document.getElementById("hasilKelilingSegitiga");
  let consolSatuan = document.getElementById("consoleSatuan17");
  let consolSatuan1 = document.getElementById("consoleSatuan18");
  let consolSatuan2 = document.getElementById("consoleSatuan19");

  consolSatuan.innerHTML = satuan;
  consolSatuan1.innerHTML = satuan;
  consolSatuan2.innerHTML = satuan;

  if (bulatkan === "ya") {
    consol.innerHTML = Math.round(hasil) + " " + satuan;
  } else {
    consol.innerHTML = hasil + " " + satuan;
  }
}
function hitungA() {
  let a = document.getElementById("angkaAkar");
  let hasil = Math.sqrt(Number(a.value));
  let consol = document.getElementById("hasilKuadrat");

  consol.innerHTML = hasil;
}
function bukaKelilingPersegi() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "none";
  closeKelilingPersegi.style.display = "flex";
  opens.style.display = "none";
  closes.style.display = "flex";
  kelilingPersegi.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupKelilingPersegi() {
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegi = document.getElementById("kelilingPersegi");

  kelilingPersegi.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
}
function bukaKelilingPersegiPanjang() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "none";
  closeKelilingPersegiPanjang.style.display = "flex";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegiPanjang.style.display = "flex";
  kelilingPersegi.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupKelilingPersegiPanjang() {
  let openp = document.getElementById("mulaiKelilingPersegiPanjang");
  let closep = document.getElementById("tutupKelilingPersegiPanjang");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  kelilingPersegiPanjang.style.display = "none";
  openp.style.display = "flex";
  closep.style.display = "none";
}
function bukaKelilingSegitiga() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  openKelilingSegitiga.style.display = "none";
  closeKelilingSegitiga.style.display = "flex";
  kelilingSegitiga.style.display = "flex"
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  kelilingPersegi.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupKelilingSegitiga() {
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")

  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
}
function bukaKelilingLingkaran() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  openKelilingLingkaran.style.display = "none";
  closeKelilingLingkaran.style.display = "flex";
  kelilingLingkaran.style.display = "flex";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  kelilingPersegi.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupKelilingLingkaran() {
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")

  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
}
function bukaAkar() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "none";
  closeAkarKuadrat.style.display = "flex";
  akarKuadrat.style.display = "flex";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  kelilingPersegi.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupAkar() {
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")

  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
}
function bukaTabung() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "none";
  closeTabung.style.display = "flex";
  Tabung.style.display = "flex";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  kelilingPersegi.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupTabung() {
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")

  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
}
function bukaPecahan() {
  let openperpa = document.getElementById("mulaipp");
  let closeperpa = document.getElementById("tutuppp");
  let openper = document.getElementById("mulaip");
  let closeper = document.getElementById("tutupp");
  let balok = document.getElementById("balok");
  let pp = document.getElementById("persegipanjang");
  let p = document.getElementById("persegi");
  let luasLing = document.getElementById("luasLingkaran");
  let openLuasLing = document.getElementById("mulaiLuasLing");
  let closeLuasLing = document.getElementById("tutupLuasLing");
  let opens = document.getElementById("mulailuassegitiga");
  let closes = document.getElementById("tutupluassegitiga");
  let kelilingPersegi = document.getElementById("kelilingPersegi");
  let openKelilingPersegi = document.getElementById("mulaiKelilingPersegi");
  let closeKelilingPersegi = document.getElementById("tutupKelilingPersegi");
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let openKelilingPersegiPanjang = document.getElementById("mulaiKelilingPersegiPanjang");
  let closeKelilingPersegiPanjang = document.getElementById("tutupKelilingPersegiPanjang");
  let openbola = document.getElementById("mulaibola");
  let closebola = document.getElementById("tutupbola");
  let bola = document.getElementById("bola");
  let openkubus = document.getElementById("mulaik");
  let closekubus = document.getElementById("tutupk");
  let kubus = document.getElementById("kubus");
  let openKelilingLingkaran = document.getElementById("mulaiKelilingLingkaran");
  let closeKelilingLingkaran = document.getElementById("tutupKelilingLingkaran");
  let kelilingLingkaran = document.getElementById("kelilingLingkaran")
  let openKelilingSegitiga = document.getElementById("mulaiKelilingSegitiga");
  let closeKelilingSegitiga = document.getElementById("tutupKelilingSegitiga");
  let kelilingSegitiga = document.getElementById("kelilingSegitiga")
  let openAkarKuadrat = document.getElementById("mulaiAkar");
  let closeAkarKuadrat = document.getElementById("tutupAkar");
  let akarKuadrat = document.getElementById("akar")
  let openTabung = document.getElementById("mulaiTabung");
  let closeTabung = document.getElementById("tutupTabung");
  let Tabung = document.getElementById("tabung")
  let openPecahan = document.getElementById("mulaiPecahan");
  let closePecahan = document.getElementById("tutupPecahan");
  let Pecahan = document.getElementById("pecahan")

  openPecahan.style.display = "none";
  closePecahan.style.display = "flex";
  Pecahan.style.display = "flex";
  openTabung.style.display = "flex";
  closeTabung.style.display = "none";
  Tabung.style.display = "none";
  openAkarKuadrat.style.display = "flex";
  closeAkarKuadrat.style.display = "none";
  akarKuadrat.style.display = "none";
  openKelilingSegitiga.style.display = "flex";
  closeKelilingSegitiga.style.display = "none";
  kelilingSegitiga.style.display = "none";
  openKelilingLingkaran.style.display = "flex";
  closeKelilingLingkaran.style.display = "none";
  kelilingLingkaran.style.display = "none";
  openkubus.style.display = "flex";
  closekubus.style.display = "none";
  kubus.style.display = "none";
  bola.style.display = "none";
  openbola.style.display = "flex";
  closebola.style.display = "none";
  openKelilingPersegiPanjang.style.display = "flex";
  closeKelilingPersegiPanjang.style.display = "none";
  openKelilingPersegi.style.display = "flex";
  closeKelilingPersegi.style.display = "none";
  kelilingPersegiPanjang.style.display = "none";
  kelilingPersegi.style.display = "none";
  opens.style.display = "none";
  closes.style.display = "flex";
  openper.style.display = "flex";
  openperpa.style.display = "flex";
  closeperpa.style.display = "none";
  closeper.style.display = "none";
  openLuasLing.style.display = "flex";
  closeLuasLing.style.display = "none";
  balok.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
  luasLing.style.display = "none";
}
function tutupPecahan() {
  let openPecahan = document.getElementById("mulaiPecahan");
  let closePecahan = document.getElementById("tutupPecahan");
  let Pecahan = document.getElementById("pecahan")

  openPecahan.style.display = "flex";
  closePecahan.style.display = "none";
  Pecahan.style.display = "none";
}