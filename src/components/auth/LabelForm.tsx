import React from 'react';

const LabelForm: React.FC<{ title: string }> = ({ title }) => {
  return (
    <label className="font-sub text-[14px] font-[400] leading-[16px] text-[#0C1421] dark:text-white  sm:text-[16px]">
      {title}
    </label>
  );
};

export default LabelForm;
