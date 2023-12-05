import Image from "next/image";
import { Fragment } from "react";
import { CarProps } from "@/types";

import { Dialog, Transition } from "@headlessui/react";

interface CardDetailsProps {
    isOpen: boolean;
    closeModal: () => void
    car: CarProps
}
export default function CardDetails({ isOpen, closeModal, car}:
    CardDetailsProps) {

    return (
        <div>s</div>
    )
}