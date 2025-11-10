
import React from 'react';

interface ChecklistGroupProps {
    title: string;
    items: string[];
    checkedState: Record<string, boolean>;
    onChange: (itemName: string, isChecked: boolean) => void;
}

export const ChecklistGroup: React.FC<ChecklistGroupProps> = ({ title, items, checkedState, onChange }) => {
    return (
        <>
            <h3 className="text-[#436184] text-lg mt-6 mb-2 font-bold">{title}</h3>
            <div className="bg-[#eef3fb] border border-[#d0d8e5] rounded-lg p-4 mb-4">
                {items.map((item) => (
                    <label key={item} className="flex items-start font-normal text-gray-800 my-3 cursor-pointer">
                        <input
                            type="checkbox"
                            className="mr-3 accent-[#6080A3] w-5 h-5 flex-shrink-0 mt-1"
                            checked={checkedState[item] || false}
                            onChange={(e) => onChange(item, e.target.checked)}
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>
        </>
    );
};
