// import React from 'react';


// export function Stat({ label, value }) {
// return (
// <div className="bg-white/10 backdrop-blur-sm p-3 rounded-md text-center">
// <div className="text-sm text-gray-200">{label}</div>
// <div className="text-xl font-semibold text-white">{value}</div>
// </div>
// );
// }


// export function FeatureCard({ title, desc, img }) {
// return (
// <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
// <img src={img} alt={title} className="h-40 w-full object-cover" />
// <div className="p-5">
// <h4 className="font-semibold text-lg">{title}</h4>
// <p className="mt-2 text-gray-600">{desc}</p>
// <a className="inline-block mt-4 text-indigo-600 font-semibold" href="#">Learn more →</a>
// </div>
// </div>
// );
// }


// export function PricingCard({ plan, price, features = [], featured = false }) {
// return (
// <div className={`p-6 rounded-2xl border ${featured ? 'border-indigo-400 bg-indigo-50' : 'bg-white'}`}>
// <div className="flex items-center justify-between">
// <div>
// <h5 className="font-bold">{plan}</h5>
// <p className="text-sm text-gray-500 mt-1">{price}</p>
// </div>
// <div className="text-2xl font-extrabold">{price === 'Free' ? 'Free' : price}</div>
// </div>


// <ul className="mt-4 space-y-2 text-sm text-gray-600">
// {features.map((f, i) => (
// <li key={i}>• {f}</li>
// ))}
// </ul>


// <div className="mt-6">
// <button className={`w-full px-4 py-2 rounded-md font-semibold ${featured ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
// Choose
// </button>
// </div>
// </div>
// );
// }