'use client';

import { useState, useEffect } from 'react';

type LanguageCode =
  | 'en'
  | 'ko'
  | 'ja'
  | 'zh'
  | 'es'
  | 'fr'
  | 'de'
  | 'pt'
  | 'ru'
  | 'ar'
  | 'hi'
  | 'it'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'vi'
  | 'th'
  | 'sv'
  | 'da'
  | 'no';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    title: 'Gas Price Calculator',
    distance: 'Distance',
    miles: 'Miles',
    km: 'Kilometers',
    fuelEfficiency: 'Fuel Efficiency',
    mpg: 'MPG (Miles per Gallon)',
    lper100km: 'L/100km (Liters per 100 km)',
    gasPrice: 'Gas Price',
    perGallon: 'per Gallon ($)',
    perLiter: 'per Liter ($)',
    roundTrip: 'Round Trip',
    calculate: 'Calculate',
    results: 'Results',
    totalFuel: 'Total Fuel Needed',
    totalCost: 'Total Cost',
    costPerUnit: 'Cost per Mile/Km',
  },
  ko: {
    title: '휘발유 가격 계산기',
    distance: '거리',
    miles: '마일',
    km: '킬로미터',
    fuelEfficiency: '연비',
    mpg: 'MPG (갤런당 마일)',
    lper100km: 'L/100km (100km당 리터)',
    gasPrice: '휘발유 가격',
    perGallon: '갤런당 ($)',
    perLiter: '리터당 ($)',
    roundTrip: '왕복',
    calculate: '계산하기',
    results: '결과',
    totalFuel: '필요한 총 연료',
    totalCost: '총 비용',
    costPerUnit: '마일/킬로미터당 비용',
  },
  ja: {
    title: 'ガソリン価格計算機',
    distance: '距離',
    miles: 'マイル',
    km: 'キロメートル',
    fuelEfficiency: '燃費',
    mpg: 'MPG (ガロンあたりのマイル)',
    lper100km: 'L/100km (100kmあたりのリットル)',
    gasPrice: 'ガソリン価格',
    perGallon: 'ガロンあたり ($)',
    perLiter: 'リットルあたり ($)',
    roundTrip: '往復',
    calculate: '計算する',
    results: '結果',
    totalFuel: '必要な総燃料',
    totalCost: '総費用',
    costPerUnit: 'マイル/キロメートルあたりの費用',
  },
  zh: {
    title: '汽油价格计算器',
    distance: '距离',
    miles: '英里',
    km: '公里',
    fuelEfficiency: '燃油效率',
    mpg: 'MPG (英里/加仑)',
    lper100km: 'L/100km (升/100公里)',
    gasPrice: '汽油价格',
    perGallon: '每加仑 ($)',
    perLiter: '每升 ($)',
    roundTrip: '往返',
    calculate: '计算',
    results: '结果',
    totalFuel: '所需总燃油',
    totalCost: '总成本',
    costPerUnit: '每英里/公里的成本',
  },
  es: {
    title: 'Calculadora de Precio de Gasolina',
    distance: 'Distancia',
    miles: 'Millas',
    km: 'Kilómetros',
    fuelEfficiency: 'Eficiencia de Combustible',
    mpg: 'MPG (Millas por Galón)',
    lper100km: 'L/100km (Litros por 100 km)',
    gasPrice: 'Precio del Combustible',
    perGallon: 'por Galón ($)',
    perLiter: 'por Litro ($)',
    roundTrip: 'Viaje Redondo',
    calculate: 'Calcular',
    results: 'Resultados',
    totalFuel: 'Combustible Total Necesario',
    totalCost: 'Costo Total',
    costPerUnit: 'Costo por Milla/Km',
  },
  fr: {
    title: 'Calculatrice de Prix du Carburant',
    distance: 'Distance',
    miles: 'Miles',
    km: 'Kilomètres',
    fuelEfficiency: 'Rendement du Carburant',
    mpg: 'MPG (Miles par Gallon)',
    lper100km: 'L/100km (Litres par 100 km)',
    gasPrice: 'Prix du Carburant',
    perGallon: 'par Gallon ($)',
    perLiter: 'par Litre ($)',
    roundTrip: 'Aller-Retour',
    calculate: 'Calculer',
    results: 'Résultats',
    totalFuel: 'Carburant Total Nécessaire',
    totalCost: 'Coût Total',
    costPerUnit: 'Coût par Mille/km',
  },
  de: {
    title: 'Benzinpreisrechner',
    distance: 'Entfernung',
    miles: 'Meilen',
    km: 'Kilometer',
    fuelEfficiency: 'Kraftstoffeffizienz',
    mpg: 'MPG (Meilen pro Gallone)',
    lper100km: 'L/100km (Liter pro 100 km)',
    gasPrice: 'Benzinpreis',
    perGallon: 'pro Gallone ($)',
    perLiter: 'pro Liter ($)',
    roundTrip: 'Hin- und Rückfahrt',
    calculate: 'Berechnen',
    results: 'Ergebnisse',
    totalFuel: 'Benötigter Gesamtkraftstoff',
    totalCost: 'Gesamtkosten',
    costPerUnit: 'Kosten pro Meile/km',
  },
  pt: {
    title: 'Calculadora de Preço de Combustível',
    distance: 'Distância',
    miles: 'Milhas',
    km: 'Quilômetros',
    fuelEfficiency: 'Eficiência de Combustível',
    mpg: 'MPG (Milhas por Galão)',
    lper100km: 'L/100km (Litros por 100 km)',
    gasPrice: 'Preço do Combustível',
    perGallon: 'por Galão ($)',
    perLiter: 'por Litro ($)',
    roundTrip: 'Ida e Volta',
    calculate: 'Calcular',
    results: 'Resultados',
    totalFuel: 'Combustível Total Necessário',
    totalCost: 'Custo Total',
    costPerUnit: 'Custo por Milha/km',
  },
  ru: {
    title: 'Калькулятор Цены на Бензин',
    distance: 'Расстояние',
    miles: 'Мили',
    km: 'Километры',
    fuelEfficiency: 'Расход Топлива',
    mpg: 'MPG (Мили на Галлон)',
    lper100km: 'L/100km (Литры на 100 км)',
    gasPrice: 'Цена Бензина',
    perGallon: 'за Галлон ($)',
    perLiter: 'за Литр ($)',
    roundTrip: 'Туда и Обратно',
    calculate: 'Рассчитать',
    results: 'Результаты',
    totalFuel: 'Необходимое Топливо',
    totalCost: 'Общая Стоимость',
    costPerUnit: 'Стоимость на Милю/км',
  },
  ar: {
    title: 'حاسبة أسعار الغاز',
    distance: 'المسافة',
    miles: 'أميال',
    km: 'كيلومتر',
    fuelEfficiency: 'كفاءة الوقود',
    mpg: 'MPG (أميال لكل جالون)',
    lper100km: 'L/100km (لتر لكل 100 كم)',
    gasPrice: 'سعر الوقود',
    perGallon: 'لكل جالون ($)',
    perLiter: 'لكل لتر ($)',
    roundTrip: 'ذهاب وإياب',
    calculate: 'حساب',
    results: 'النتائج',
    totalFuel: 'إجمالي الوقود المطلوب',
    totalCost: 'التكلفة الإجمالية',
    costPerUnit: 'التكلفة لكل ميل/كم',
  },
  hi: {
    title: 'गैस मूल्य कैलकुलेटर',
    distance: 'दूरी',
    miles: 'मील',
    km: 'किलोमीटर',
    fuelEfficiency: 'ईंधन दक्षता',
    mpg: 'MPG (मील प्रति गैलन)',
    lper100km: 'L/100km (100 किमी प्रति लीटर)',
    gasPrice: 'ईंधन मूल्य',
    perGallon: 'प्रति गैलन ($)',
    perLiter: 'प्रति लीटर ($)',
    roundTrip: 'राउंड ट्रिप',
    calculate: 'गणना करें',
    results: 'परिणाम',
    totalFuel: 'कुल ईंधन आवश्यक',
    totalCost: 'कुल लागत',
    costPerUnit: 'प्रति मील/किमी लागत',
  },
  it: {
    title: 'Calcolatore Prezzo Benzina',
    distance: 'Distanza',
    miles: 'Miglia',
    km: 'Chilometri',
    fuelEfficiency: 'Efficienza Carburante',
    mpg: 'MPG (Miglia per Gallone)',
    lper100km: 'L/100km (Litri per 100 km)',
    gasPrice: 'Prezzo Carburante',
    perGallon: 'per Gallone ($)',
    perLiter: 'per Litro ($)',
    roundTrip: 'Andata e Ritorno',
    calculate: 'Calcola',
    results: 'Risultati',
    totalFuel: 'Carburante Totale Necessario',
    totalCost: 'Costo Totale',
    costPerUnit: 'Costo per Miglio/km',
  },
  nl: {
    title: 'Benzineprijs Calculator',
    distance: 'Afstand',
    miles: 'Mijlen',
    km: 'Kilometer',
    fuelEfficiency: 'Brandstofefficiëntie',
    mpg: 'MPG (Mijlen per Gallon)',
    lper100km: 'L/100km (Liter per 100 km)',
    gasPrice: 'Benzineprijs',
    perGallon: 'per Gallon ($)',
    perLiter: 'per Liter ($)',
    roundTrip: 'Retourrit',
    calculate: 'Berekenen',
    results: 'Resultaten',
    totalFuel: 'Totale Brandstof Nodig',
    totalCost: 'Totale Kosten',
    costPerUnit: 'Kosten per Mijl/km',
  },
  pl: {
    title: 'Kalkulator Ceny Benzyny',
    distance: 'Odległość',
    miles: 'Mile',
    km: 'Kilometry',
    fuelEfficiency: 'Zużycie Paliwa',
    mpg: 'MPG (Mile na Galon)',
    lper100km: 'L/100km (Litry na 100 km)',
    gasPrice: 'Cena Benzyny',
    perGallon: 'za Galon ($)',
    perLiter: 'za Litr ($)',
    roundTrip: 'W Obie Strony',
    calculate: 'Oblicz',
    results: 'Wyniki',
    totalFuel: 'Łączne Paliwo Potrzebne',
    totalCost: 'Całkowity Koszt',
    costPerUnit: 'Koszt za Milę/km',
  },
  tr: {
    title: 'Benzin Fiyatı Hesaplayıcı',
    distance: 'Mesafe',
    miles: 'Mil',
    km: 'Kilometre',
    fuelEfficiency: 'Yakıt Verimliliği',
    mpg: 'MPG (Galon Başına Mil)',
    lper100km: 'L/100km (100 km Başına Litre)',
    gasPrice: 'Benzin Fiyatı',
    perGallon: 'Galon Başına ($)',
    perLiter: 'Litre Başına ($)',
    roundTrip: 'Gidiş-Dönüş',
    calculate: 'Hesapla',
    results: 'Sonuçlar',
    totalFuel: 'Gerekli Toplam Yakıt',
    totalCost: 'Toplam Maliyet',
    costPerUnit: 'Mil/km Başına Maliyet',
  },
  vi: {
    title: 'Máy Tính Giá Xăng',
    distance: 'Khoảng Cách',
    miles: 'Dặm',
    km: 'Kilômét',
    fuelEfficiency: 'Tiết Kiệm Nhiên Liệu',
    mpg: 'MPG (Dặm trên Gallon)',
    lper100km: 'L/100km (Lít trên 100 km)',
    gasPrice: 'Giá Xăng',
    perGallon: 'trên Gallon ($)',
    perLiter: 'trên Lít ($)',
    roundTrip: 'Khứ Hồi',
    calculate: 'Tính Toán',
    results: 'Kết Quả',
    totalFuel: 'Tổng Nhiên Liệu Cần',
    totalCost: 'Tổng Chi Phí',
    costPerUnit: 'Chi Phí trên Dặm/km',
  },
  th: {
    title: 'เครื่องคำนวณราคาน้ำมันเชื้อเพลิง',
    distance: 'ระยะทาง',
    miles: 'ไมล์',
    km: 'กิโลเมตร',
    fuelEfficiency: 'ประสิทธิภาพเชื้อเพลิง',
    mpg: 'MPG (ไมล์ต่อแกลลอน)',
    lper100km: 'L/100km (ลิตรต่อ 100 กิโลเมตร)',
    gasPrice: 'ราคาน้ำมันเชื้อเพลิง',
    perGallon: 'ต่อแกลลอน ($)',
    perLiter: 'ต่อลิตร ($)',
    roundTrip: 'ไปกลับ',
    calculate: 'คำนวณ',
    results: 'ผลลัพธ์',
    totalFuel: 'เชื้อเพลิงทั้งหมดที่ต้องการ',
    totalCost: 'ต้นทุนรวม',
    costPerUnit: 'ต้นทุนต่อไมล์/กิโลเมตร',
  },
  sv: {
    title: 'Bränsleprisräknare',
    distance: 'Avstånd',
    miles: 'Mil',
    km: 'Kilometer',
    fuelEfficiency: 'Bränsleeffektivitet',
    mpg: 'MPG (Miles per Gallon)',
    lper100km: 'L/100km (Liter per 100 km)',
    gasPrice: 'Bränslpris',
    perGallon: 'per Gallon ($)',
    perLiter: 'per Liter ($)',
    roundTrip: 'Tur och Retur',
    calculate: 'Beräkna',
    results: 'Resultat',
    totalFuel: 'Total Bränsle Behövs',
    totalCost: 'Total Kostnad',
    costPerUnit: 'Kostnad per Mil/km',
  },
  da: {
    title: 'Benzinprisberegner',
    distance: 'Afstand',
    miles: 'Mil',
    km: 'Kilometer',
    fuelEfficiency: 'Brændstofeffektivitet',
    mpg: 'MPG (Miles per Gallon)',
    lper100km: 'L/100km (Liter per 100 km)',
    gasPrice: 'Benzinpris',
    perGallon: 'per Gallon ($)',
    perLiter: 'per Liter ($)',
    roundTrip: 'Tur-retur',
    calculate: 'Beregn',
    results: 'Resultater',
    totalFuel: 'Samlet Brændstof Nødvendigt',
    totalCost: 'Samlet Omkostning',
    costPerUnit: 'Omkostning pr. Mil/km',
  },
  no: {
    title: 'Drivstoffpriskalkulatur',
    distance: 'Avstand',
    miles: 'Mil',
    km: 'Kilometer',
    fuelEfficiency: 'Drivstoffeffektivitet',
    mpg: 'MPG (Mil per Gallon)',
    lper100km: 'L/100km (Liter per 100 km)',
    gasPrice: 'Drivstoffpris',
    perGallon: 'per Gallon ($)',
    perLiter: 'per Liter ($)',
    roundTrip: 'Tur-retur',
    calculate: 'Beregn',
    results: 'Resultater',
    totalFuel: 'Totalt Drivstoff Påkrevd',
    totalCost: 'Totalkostnad',
    costPerUnit: 'Kostnad per Mil/km',
  },
};

const languages: { code: LanguageCode; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'th', name: 'ไทย' },
  { code: 'sv', name: 'Svenska' },
  { code: 'da', name: 'Dansk' },
  { code: 'no', name: 'Norsk' },
];

export default function Calculator() {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [distanceValue, setDistanceValue] = useState('');
  const [fuelEfficiencyValue, setFuelEfficiencyValue] = useState('');
  const [gasPriceValue, setGasPriceValue] = useState('');
  const [useMiles, setUseMiles] = useState(true);
  const [useMPG, setUseMPG] = useState(true);
  const [useGallon, setUseGallon] = useState(true);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [results, setResults] = useState<{
    totalFuel: number;
    totalCost: number;
    costPerUnit: number;
  } | null>(null);

  const t = (key: string): string => translations[language]?.[key] || key;

  useEffect(() => {
    const saved = localStorage.getItem('gasCalc');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setLanguage(data.language || 'en');
        setDistanceValue(data.distance || '');
        setFuelEfficiencyValue(data.efficiency || '');
        setGasPriceValue(data.price || '');
        setUseMiles(data.useMiles !== false);
        setUseMPG(data.useMPG !== false);
        setUseGallon(data.useGallon !== false);
        setIsRoundTrip(data.roundTrip || false);
      } catch (e) {
        // Silently fail
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'gasCalc',
      JSON.stringify({
        language,
        distance: distanceValue,
        efficiency: fuelEfficiencyValue,
        price: gasPriceValue,
        useMiles,
        useMPG,
        useGallon,
        roundTrip: isRoundTrip,
      })
    );
  }, [language, distanceValue, fuelEfficiencyValue, gasPriceValue, useMiles, useMPG, useGallon, isRoundTrip]);

  const handleCalculate = () => {
    const distance = parseFloat(distanceValue);
    const efficiency = parseFloat(fuelEfficiencyValue);
    const price = parseFloat(gasPriceValue);

    if (!distance || !efficiency || !price || distance <= 0 || efficiency <= 0 || price <= 0) {
      alert(t('results')); // Simple validation
      return;
    }

    let actualDistance = distance;
    if (isRoundTrip) {
      actualDistance = distance * 2;
    }

    let fuelNeeded = 0;

    if (useMPG) {
      // MPG to gallons needed
      fuelNeeded = actualDistance / efficiency;
      // If using per-liter price, convert MPG to L/100km and adjust
      if (!useGallon) {
        const lper100km = (100 * 3.785) / (efficiency * 1.609);
        fuelNeeded = (actualDistance * 1.609 * lper100km) / 100 / 3.785;
      }
    } else {
      // L/100km
      fuelNeeded = (actualDistance * 1.609 * efficiency) / 100;
      // If using per-gallon price, convert liters to gallons
      if (useGallon) {
        fuelNeeded = fuelNeeded / 3.785;
      }
    }

    const totalCost = fuelNeeded * price;
    const costPerUnit = totalCost / actualDistance;

    setResults({
      totalFuel: fuelNeeded,
      totalCost,
      costPerUnit,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-100">{t('title')}</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as LanguageCode)}
          className="tool-input w-40"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Distance Input */}
        <div className="card">
          <label className="block text-sm font-semibold text-gray-300 mb-2">{t('distance')}</label>
          <input
            type="number"
            value={distanceValue}
            onChange={(e) => setDistanceValue(e.target.value)}
            placeholder="100"
            className="tool-input mb-3"
          />
          <div className="flex gap-2">
            <label className="flex items-center text-gray-300">
              <input
                type="radio"
                checked={useMiles}
                onChange={() => setUseMiles(true)}
                className="mr-2"
              />
              {t('miles')}
            </label>
            <label className="flex items-center text-gray-300">
              <input
                type="radio"
                checked={!useMiles}
                onChange={() => setUseMiles(false)}
                className="mr-2"
              />
              {t('km')}
            </label>
          </div>
        </div>

        {/* Fuel Efficiency Input */}
        <div className="card">
          <label className="block text-sm font-semibold text-gray-300 mb-2">{t('fuelEfficiency')}</label>
          <input
            type="number"
            value={fuelEfficiencyValue}
            onChange={(e) => setFuelEfficiencyValue(e.target.value)}
            placeholder="25"
            className="tool-input mb-3"
          />
          <div className="flex gap-2">
            <label className="flex items-center text-gray-300 text-sm">
              <input
                type="radio"
                checked={useMPG}
                onChange={() => setUseMPG(true)}
                className="mr-2"
              />
              {t('mpg')}
            </label>
            <label className="flex items-center text-gray-300 text-sm">
              <input
                type="radio"
                checked={!useMPG}
                onChange={() => setUseMPG(false)}
                className="mr-2"
              />
              {t('lper100km')}
            </label>
          </div>
        </div>

        {/* Gas Price Input */}
        <div className="card">
          <label className="block text-sm font-semibold text-gray-300 mb-2">{t('gasPrice')}</label>
          <input
            type="number"
            value={gasPriceValue}
            onChange={(e) => setGasPriceValue(e.target.value)}
            placeholder="3.50"
            className="tool-input mb-3"
            step="0.01"
          />
          <div className="flex gap-2">
            <label className="flex items-center text-gray-300">
              <input
                type="radio"
                checked={useGallon}
                onChange={() => setUseGallon(true)}
                className="mr-2"
              />
              {t('perGallon')}
            </label>
            <label className="flex items-center text-gray-300">
              <input
                type="radio"
                checked={!useGallon}
                onChange={() => setUseGallon(false)}
                className="mr-2"
              />
              {t('perLiter')}
            </label>
          </div>
        </div>

        {/* Round Trip Toggle */}
        <div className="card flex items-center justify-between">
          <label className="text-gray-300 font-semibold">{t('roundTrip')}</label>
          <input
            type="checkbox"
            checked={isRoundTrip}
            onChange={(e) => setIsRoundTrip(e.target.checked)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <div className="mt-8 text-center">
        <button onClick={handleCalculate} className="btn-primary text-lg px-12 py-4">
          {t('calculate')}
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-100 mb-6">{t('results')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <p className="text-gray-400 text-center mb-2">{t('totalFuel')}</p>
              <p className="tool-result">
                {results.totalFuel.toFixed(2)} {useGallon ? 'gal' : 'L'}
              </p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-center mb-2">{t('totalCost')}</p>
              <p className="tool-result">${results.totalCost.toFixed(2)}</p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-center mb-2">{t('costPerUnit')}</p>
              <p className="tool-result">${results.costPerUnit.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      {/* SEO-friendly FAQ Section */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <h3 className="text-2xl font-bold text-gray-100 mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div className="card">
            <h4 className="font-bold text-gray-100 mb-2">How do I calculate gas cost for a trip?</h4>
            <p className="text-gray-300">
              Enter your trip distance, vehicle fuel efficiency (MPG or L/100km), and current gas price. Our calculator will
              instantly show you the total fuel needed and cost.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-gray-100 mb-2">What is MPG and how is it different from L/100km?</h4>
            <p className="text-gray-300">
              MPG (Miles Per Gallon) measures fuel efficiency in the US. L/100km (Liters per 100 kilometers) is used in most
              other countries. Our calculator supports both measurements.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-gray-100 mb-2">Can I use this calculator for round trips?</h4>
            <p className="text-gray-300">
              Yes! Simply check the "Round Trip" option and enter your one-way distance. The calculator will automatically
              double the distance for your calculation.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-gray-100 mb-2">What is the cost per mile/km calculation?</h4>
            <p className="text-gray-300">
              Cost per mile/km divides your total trip cost by the distance traveled, showing how much each mile or kilometer
              costs you in fuel.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-gray-100 mb-2">How accurate is this fuel cost calculator?</h4>
            <p className="text-gray-300">
              The calculator provides accurate estimates based on the inputs you provide. Actual costs may vary due to driving
              conditions, terrain, and vehicle variations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
