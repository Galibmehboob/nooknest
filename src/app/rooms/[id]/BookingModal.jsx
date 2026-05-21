// 'use client';

// import { useState } from 'react';
// import { toast } from 'sonner';

// import { useRouter } from 'next/navigation';

// import { useMemo } from 'react';

// import {
//     Button,
//     Input,
//     Select,
//     SelectItem,
//     Textarea,
// } from '@heroui/react';

// import {
//     Modal,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalFooter,
// } from "@heroui/modal";

// import {
//     CalendarDays,
//     ChevronDown,
//     X,
// } from 'lucide-react';

// const BookNowModal = ({ room }) => {

//     const router = useRouter();

//     const [date, setDate] = useState('');

//     const [startTime, setStartTime] = useState('');

//     const [endTime, setEndTime] = useState('');

//     const [note, setNote] = useState('');

//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>


//             <Button
//                 onPress={() => setIsOpen(true)}
//                 className="flex w-full items-center justify-center gap-2
//                 bg-indigo-500 hover:bg-indigo-600
//                 transition-all duration-300
//                 rounded-2xl py-7 text-lg font-semibold"
//             >
//                 <CalendarDays size={20} />
//                 Book Now
//             </Button>





//             <Modal
//                 isOpen={isOpen}
//                 onOpenChange={setIsOpen}
//                 placement="center"
//                 hideCloseButton
//                 backdrop="blur"
//             >
//                 <ModalContent className="max-w-md bg-[#0B1120] border border-white/10 rounded-2xl">

//                     {(onClose) => (
//                         <>

//                             <ModalHeader className="flex items-center justify-between px-5 pt-5 pb-2">

//                                 <div>
//                                     <h2 className="text-lg font-semibold text-white">
//                                         Book {room.name}
//                                     </h2>

//                                     <p className="text-sm text-gray-400 mt-1">
//                                         Pick date & time
//                                     </p>
//                                 </div>

//                                 <button
//                                     onClick={onClose}
//                                     className="text-gray-400 hover:text-white"
//                                 >
//                                     <X size={18} />
//                                 </button>

//                             </ModalHeader>



//                             <ModalBody className="px-5 py-3 space-y-4">

//                                 <div>

//                                     <label className="text-sm text-white mb-2 block">
//                                         Date
//                                     </label>

//                                     <Input
//                                         type="date"
//                                         variant="bordered"
//                                         className="text-white"
//                                     />

//                                 </div>



//                                 <div className="grid grid-cols-2 gap-3">

//                                     <div>

//                                         <label className="text-sm text-white mb-2 block">
//                                             Start
//                                         </label>

//                                         <Input
//                                             type="time"
//                                             variant="bordered"
//                                             className="text-white"
//                                         />

//                                     </div>



//                                     <div>

//                                         <label className="text-sm text-white mb-2 block">
//                                             End
//                                         </label>

//                                         <Input
//                                             type="time"
//                                             variant="bordered"
//                                             className="text-white"
//                                         />

//                                     </div>

//                                 </div>



//                                 <div>

//                                     <label className="text-sm text-white mb-2 block">
//                                         Note
//                                     </label>

//                                     <Textarea

//                                         placeholder="Optional note"
//                                         variant="bordered"
//                                         className="text-white"
//                                     />

//                                 </div>



//                                 <div className="flex items-center justify-between border border-white/10 rounded-xl px-4 py-3">

//                                     <span className="text-sm text-gray-400">
//                                         Total
//                                     </span>

//                                     <span className="text-lg font-bold text-indigo-500">
//                                         ${room.price}
//                                     </span>

//                                 </div>

//                             </ModalBody>



//                             <ModalFooter className="px-5 pb-5 pt-2">

//                                 <Button
//                                     variant="light"
//                                     onPress={onClose}
//                                     className="text-white"
//                                 >
//                                     Cancel
//                                 </Button>

//                                 <Button
//                                     className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl"
//                                 >
//                                     Confirm
//                                 </Button>

//                             </ModalFooter>

//                         </>
//                     )}

//                 </ModalContent>
//             </Modal>
//         </>
//     );
// };

// export default BookNowModal;