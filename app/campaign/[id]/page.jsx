'use client';

import lion from "../../../public/assets/images/lion.jpg"
import Image from "next/image"
import { Button, Form, InputNumber } from 'antd'
import Shepherd from 'shepherd.js';
import { useEffect } from "react";


const data = {
    title: 'Reforestation Campaign fund raise',
    image: lion,
    description: '',
    requiredAmt: 1000,
    receivedAmt: 0
}

const {useForm} = Form;

const CampaignPage = () => {

    const [form] = useForm();

    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          classes:"z-10 tour-card",
          scrollTo: false
        },
        exitOnEsc: true,
      });

    tour.addStep({
        id: 'example-step',
        text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
        attachTo: {
            element: '.example-css-selector',
            on: 'right'
        },
        classes: 'w-[200px]',
        buttons: [
            {
            text: 'Next',
            action: tour.next
            }
        ]
    });

    useEffect(() => {
        setTimeout(() => {
            tour.start();
        }, 1000);
    }, [])

    return <section className="pb-4 h-[100vh] overflow-hidden">
        <div className="flex justify-center gap-8 w-full">

            {/* //left side */}
            <div className="rounded-lg shadow-2xl bg-white relative w-[700px] p-8">
                <Image 
                    src={lion}
                    width={"100%"}
                    // height={180}
                    className="object-contain rounded-lg self-center place-self-center"
                />

                <div className="absolute bottom-0 right-0 p-4 bg-primary-orange text-white font-medium w-full rounded-b-lg rounded-tl-3xl">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, inventore sint ad cupiditate voluptate minus consequuntur dolorem accusantium? Deserunt ducimus quaerat enim facilis numquam,a recusandae possimus facilis ducimus fuga accusantium asperiores veritatis iure!</p>
                </div>

            </div>

            {/* Right side */}
            <div className="rounded-lg shadow-2xl flex flex-col gap-4 bg-white relative w-full p-8">
                <div>
                    <Form
                        form={form}
                        layout="vertical"
                        className=""
                        onFinish={(values) => console.log(values)}
                    >
                        <Form.Item
                            name='title'
                            label={<label className="text-[30px] font-bold ">{data.title}</label>}
                            rules={[
                                { required: true, message: "Provide Amount." },
                                { type: "text", message: "Please provide amount." },
                            ]}
                        >
                            <InputNumber className="w-full" />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-primary-orange text-white text-[18px] font-semibold h-10 example-css-selector "
                        >
                            Donate
                        </Button>
                    </Form>
                </div>

                <div className="flex gap-6  justify-between items-center ">
                    <div className="text-[18px] font-semibold bg-white shadow-lg rounded-lg p-3 w-full">
                        <h1 className="text-center">Received Amount</h1>
                        <h1 className="text-center">{data.receivedAmt}</h1>
                    </div>

                    <div className="text-[18px] font-semibold bg-white shadow-lg rounded-lg p-3 w-full">
                        <h1 className="text-center">Required Amount</h1>
                        <h1 className="text-center">{data.requiredAmt}</h1>
                    </div>
                </div>

                <div>
                    <h1 className="text-[18px] font-semibold text-center ">Recent Donations</h1>
                </div>

            </div>

        </div>
    </section>
}

export default CampaignPage;