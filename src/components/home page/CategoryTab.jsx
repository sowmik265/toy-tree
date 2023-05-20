import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTab = ({toy}) => {
    return (
        <div>
            <Tabs>
                <TabList className='flex justify-center gap-5 bg-cyan-700 font-bold'>
                    <Tab>Sports cars</Tab>
                    <Tab>Off-Road Vehicles</Tab>
                    <Tab>Classic Cars</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;