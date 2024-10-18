import React from 'react';
import { Button } from 'react-daisyui';

interface ModalDeleteBillPageAdminProps {
  isOpen: boolean;
  onClose: () => void;
  billId: string | null;
  onDelete: (id: string) => Promise<void>;
}

const ModalDeleteBillPageAdmin: React.FC<ModalDeleteBillPageAdminProps> = ({
  isOpen,
  onClose,
  billId,
  onDelete,
}) => {
  if (!isOpen || !billId) return null;

  const handleDelete = async () => {
    await onDelete(billId);
    onClose();
  };

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex w-full items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
      <div className="modal-content flex flex-col rounded-lg bg-white p-10 text-start shadow dark:bg-gray-800">
        <h2 className="text-xl font-bold">Xoá Hóa Đơn</h2>
        <p className="mt-4">Bạn có chắc chắn muốn xoá hóa đơn này?</p>
        <div className="mt-4 space-x-5 text-center">
          <Button onClick={onClose} className="border-gray-50 text-black">Huỷ bỏ</Button>
          <Button color="error" onClick={handleDelete} className="text-white">Xoá</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteBillPageAdmin;
