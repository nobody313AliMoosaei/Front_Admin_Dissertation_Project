//Components
import { useState } from "react";
import LoadingBtn from "../../../common/loadingBtn";
import ModalWrapper from "../../../common/modalWrapper";

const DeleteNewsModal = ({ id, name, isShowModal, closeModalHandler }) => {
  console.log("open delete modal");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ModalWrapper isShowedModal={isShowModal} onCloseModal={closeModalHandler}>
      <div className="flex flex-col items-center justify-center gap-7">
        <span className="text-xl text-[#353535]">
          آیا از حذف خبر <span className="font-medium mx-1">{name}</span>
          مطمئن هستید؟
        </span>

        <div className="flex items-center justify-between w-full">
          <LoadingBtn
            isLoading={isLoading}
            btnClass="border border-[#2080F6] text-white bg-[#2080F6] rounded-xl"
          >
            حذف
          </LoadingBtn>
          <button
            onClick={closeModalHandler}
            className="border border-[#2080F6] text-[#2080F6] px-7 p-2 rounded-xl font-medium"
          >
            انصراف
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteNewsModal;
