import { create } from "zustand"

import {Product} from "@/types"
import { UndoIcon } from "lucide-react";

interface PreviewModalStore {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product ) => void;
    onClose: () => void;
}

const usePreviewNodal = create<PreviewModalStore> ((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({data:data, isOpen: true }),
    onClose : () => set({isOpen:false})
}) );

export default usePreviewNodal;