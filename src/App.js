import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 1,
      icon: '🧠',
      name: 'สุขภาพจิต / ความช่วยเหลือทางใจ',
      hotlines: [
        { name: 'สายด่วนสุขภาพจิต', number: '1323', icon: '💭', description: 'ปรึกษาเรื่องสุขภาพจิต ความเครียด ซึมเศร้า' },
        { name: 'สายด่วนครอบครัว', number: '1667', icon: '👨‍👩‍👧‍👦', description: 'ปรึกษาครอบครัว ความรุนแรงในบ้าน' },
      ],
    },
    {
      id: 2,
      icon: '🚨',
      name: 'เหตุฉุกเฉิน / ความปลอดภัย',
      hotlines: [
        { name: 'เหตุด่วนเหตุร้าย (ตำรวจ)', number: '191', icon: '🚓', description: 'แจ้งเหตุด่วน เหตุร้ายทั่วไป' },
        { name: 'กู้ชีพ-กู้ภัย (ศูนย์นเรนทร)', number: '1669', icon: '🚑', description: 'เจ็บป่วยฉุกเฉิน อุบัติเหตุ' },
        { name: 'แจ้งเหตุเพลิงไหม้', number: '199', icon: '🚒', description: 'เหตุเพลิงไหม้ สารเคมี' },
      ],
    },
    {
      id: 3,
      icon: '👨‍👩‍👧‍👦',
      name: 'ครอบครัว / เด็ก / ความรุนแรง',
      hotlines: [
        { name: 'ศูนย์พิทักษ์เด็ก สตรี ครอบครัว', number: '1300', icon: '🛡️', description: 'ช่วยเหลือผู้ถูกกระทำความรุนแรง เด็ก และครอบครัว' },
        { name: 'Childline Thailand Foundation', number: '1387', icon: '🧒', description: 'ช่วยเหลือเด็กที่ถูกล่วงละเมิดหรือขาดผู้ดูแล' },
        { name: 'สายด่วนกรมกิจการเด็กและเยาวชน', number: '1134', icon: '👶', description: 'ช่วยเหลือเด็กและเยาวชน' },
      ],
    },
    {
      id: 4,
      icon: '⚕️',
      name: 'การแพทย์ / พฤติกรรมสุขภาพ',
      hotlines: [
        { name: 'สายด่วนเลิกบุหรี่', number: '1600', icon: '🚭', description: 'ให้คำแนะนำการเลิกบุหรี่' },
        { name: 'สายด่วนเอดส์', number: '1663', icon: '🎗️', description: 'ปรึกษาเรื่อง HIV/เอดส์' },
      ],
    },
    {
      id: 5,
      icon: '🚫',
      name: 'ยาเสพติด / ป้องกัน / บำบัด',
      hotlines: [
        { name: 'สายด่วนปรึกษายาเสพติด', number: '1165', icon: '💊', description: 'ปรึกษาและบำบัดยาเสพติด' },
        { name: 'สายด่วน ป.ป.ส.', number: '1386', icon: '🚔', description: 'แจ้งเบาะแสยาเสพติด' },
      ],
    },
    {
      id: 6,
      icon: '⚖️',
      name: 'ร้องเรียน / ความไม่เป็นธรรม',
      hotlines: [
        { name: 'ศูนย์ดำรงธรรม', number: '1567', icon: '📋', description: 'ร้องเรียนทั่วไปต่อหน่วยงานรัฐ' },
        { name: 'ศูนย์ต่อต้านข่าวปลอม', number: '1111', icon: '📰', description: 'รายงานข่าวปลอม/ตรวจสอบ (กด 87)' },
      ],
    },
    {
      id: 7,
      icon: '🏛️',
      name: 'บริการสาธารณูปโภค / สิ่งแวดล้อม',
      hotlines: [
        { name: 'การไฟฟ้านครหลวง', number: '1130', icon: '⚡', description: 'ไฟฟ้าดับ ปัญหาจ่ายไฟ' },
        { name: 'การประปานครหลวง', number: '1125', icon: '💧', description: 'น้ำไม่ไหล/รั่วซึม' },
        { name: 'กรมควบคุมมลพิษ', number: '1650', icon: '🌫️', description: 'ปัญหามลพิษทางอากาศ น้ำ เสียง' },
      ],
    },
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    hotlines: category.hotlines.filter(hotline =>
      hotline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotline.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotline.number.includes(searchTerm)
    )
  })).filter(category => category.hotlines.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-kanit flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 shadow-lg relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4 animate-fade-in">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">SOS</span>
              <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/phrae-logo.png"
                  alt="วิทยาลัยอาชีวศึกษาแพร่"
                  className="h-16 w-16 rounded-full bg-white/90 p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <img
                  src="/we-r-cheewa.png"
                  alt="We R Chee wa"
                  className="h-16 w-16 rounded-full bg-white/90 p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">GO</span>
            </div>
            <p className="text-2xl mb-6 font-light tracking-wide animate-fade-in-up">📞เทคโนโลยีธุรกิจดิจิทัล</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative transform hover:-translate-y-1 transition-transform duration-300">
              <input
                type="text"
                placeholder="🔍 ค้นหาสายด่วน (ชื่อ, เบอร์โทร, คำอธิบาย)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white/95 shadow-lg backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-transparent pl-14 text-gray-700 placeholder-gray-400 text-lg transition-all duration-300"
              />
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                🔍
              </span>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {category.hotlines.map((hotline) => (
                  <div key={hotline.number} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl mt-1">{hotline.icon}</span>
                      <div>
                        <h3 className="font-medium text-xl text-gray-900 mb-2">{hotline.name}</h3>
                        <p className="text-gray-600 mb-4">{hotline.description}</p>
                        <a
                          href={`tel:${hotline.number}`}
                          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                          <span className="mr-2 text-xl">📞</span>
                          {hotline.number}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <p className="text-3xl text-gray-600 mb-3">ไม่พบสายด่วนที่ค้นหา</p>
            <p className="text-gray-500">ลองค้นหาด้วยคำอื่น หรือตรวจสอบการสะกดอีกครั้ง</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">เกี่ยวกับเรา</h3>
              <p className="text-gray-300 leading-relaxed">SOS GO รวบรวมเบอร์โทรสายด่วนที่สำคัญในประเทศไทย เพื่อให้คุณเข้าถึงความช่วยเหลือได้อย่างรวดเร็ว</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">ติดต่อเรา</h3>
              <div className="space-y-3">
                <p className="text-gray-300">วิทยาลัยอาชีวศึกษาแพร่</p>
                <p className="text-gray-300">We R Chee wa</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">ลิงก์ด่วน</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">หน้าหลัก</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">สายด่วนทั้งหมด</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">วิธีใช้งาน</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} SOS GO. พัฒนาโดย วิทยาลัยอาชีวศึกษาแพร่ และ We R Chee wa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
