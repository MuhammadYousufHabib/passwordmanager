'use client';

export default function InputField({ label, type, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 block w-full bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:ring-emerald-400 focus:border-emerald-400"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
