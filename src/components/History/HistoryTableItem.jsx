import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Textarea } from "flowbite-react"
import { openSnackBar } from '../../redux/snackBarReducer';
import swal from 'sweetalert2';
import date from 'date-and-time';
import { useTranslation } from "react-i18next";
import { TextareaAutosize } from "@material-ui/core";

function HistoryTableItem(props) {
    const { t } = useTranslation();
    const { authState } = useSelector((state) => state);
    const { userInfo } = authState;

    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);    //modal modalShow hide

    useEffect(() => {
        
    }, [])
    
    const output_tone = [t("tone_convincing"), t("tone_friendly"),t("tone_bold"),t("tone_professional"),t("tone_casual"),t("tone_luxury"),t("tone_witty"),t("tone_adventurous"),t("tone_persuasive"),t("tone_empathetic")];
    const { service_type, tone, output_count, total_word_usage, language, created_at, contents } = props.data;

    return (
        <>
            <tr className={props.last ? "bg-white" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"}>
                <th onClick={() => setModalShow(true)} scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="pl-3">
                        {/* <div className="font-normal text-gray-500">{firstname + " " + lastname}</div> */}
                        <div className="text-base font-semibold">{t(`${service_type}`)}</div>
                    </div>
                </th>
                <td onClick={() => setModalShow(true)} className="py-4 px-2">
                    <div className="pl-3">
                        {/* <div className="font-normal text-gray-500">{company.name}</div> */}
                        <div className="text-base font-semibold">{output_tone[tone]}</div>
                    </div>
                </td>
                <td onClick={() => setModalShow(true)} className="py-4 px-2">
                    <div className="pl-3">
                        {/* <div className="font-normal text-gray-500">{company.name}</div> */}
                        <div className="text-base font-semibold">{output_count}</div>
                    </div>
                </td>
                <td onClick={() => setModalShow(true)} className="py-4 px-2">
                    <div className="pl-3">
                        {/* <div className="font-normal text-gray-500">{company.name}</div> */}
                        <div className="text-base font-semibold">{total_word_usage}</div>
                    </div>
                </td>
                <td onClick={() => setModalShow(true)} className="py-4 px-2">
                    <div className="pl-3">
                        {/* <div className="font-normal text-gray-500">{company.name}</div> */}
                        <div className="text-base font-semibold">{language}</div>
                    </div>
                </td>
                <td onClick={() => setModalShow(true)} className="py-4 px-2">
                    <div className="pl-3">
                        {/* <div className="font-normal text-gray-500">{t("created")}</div> */}
                        <div className="text-base font-semibold">{created_at ? date.format(new Date(created_at), 'YYYY/MM/DD HH:mm:ss') : "N/A"}</div>
                    </div>
                </td>
            </tr>
            <Modal
                show={modalShow}
                size="5xl"
                popup={true}
                onClose={() => setModalShow(false)}
            >
                <Modal.Header className="px-5 py-4">
                    {t("contents")}
                </Modal.Header>
                <hr />
                <Modal.Body>
                    <div className="py-6 text-sitetx-200 max-h-[720px]">
                        <div className='bg-white' style={{textAlign: "-webkit-center"}}>
                            {
                                contents && contents.length > 0 && contents.map((data, index)=>
                                <div className='w-4/5 py-4' key={index}>
                                    <Textarea 
                                        rows={5}
                                        className='w-full focus:bg-gray-100'
                                        value={data.content}
                                        readOnly
                                    />
                                </div>
                                )
                            }
                        </div>
                    </div>
                </Modal.Body>
                <hr />
                <Modal.Footer>
                    <div className="flex items-center justify-end" style={{width:'100%'}}>
                        <div className="col-span-5 flex pl-12 gap-8">
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>
        </ >

    );
}

export default HistoryTableItem;