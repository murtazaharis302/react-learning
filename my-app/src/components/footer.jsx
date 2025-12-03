import React from 'react';


export default function Footer() {
return (
<footer className="bg-gray-900 text-gray-300 py-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-rose-400 text-white font-bold">RG</div>
<div>
<h4 className="font-semibold">RexGrid</h4>
<p className="text-sm text-gray-400">Design system & components</p>
</div>
</div>


<p className="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} RexGrid. All rights reserved.</p>
</div>


<div>
<h5 className="font-semibold mb-3">Product</h5>
<ul className="space-y-2 text-sm">
<li>Features</li>
<li>Pricing</li>
<li>Marketplace</li>
</ul>
</div>


<div>
<h5 className="font-semibold mb-3">Company</h5>
<ul className="space-y-2 text-sm">
<li>About</li>
<li>Blog</li>
<li>Contact</li>
</ul>
</div>
</div>
</footer>
);
}