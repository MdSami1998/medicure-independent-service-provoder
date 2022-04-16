import React from 'react';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-10'>My Services</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mx-3 md:mx-32 mt-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;