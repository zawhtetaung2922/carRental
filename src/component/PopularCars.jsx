import React, { useState, useEffect } from 'react';
import './PopularCars.css';

const PopularCars = () => {
    const [cars, setCars] = useState([]); 
    const [filter, setFilter] = useState('All'); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:5000/cars');
                const data = await response.json();
                setCars(data); 
            } catch (error) {
                console.error('Error fetching cars:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchCars();
    }, []);

    const filteredCars = filter === 'All' ? cars : cars.filter(car => car.type === filter);

    if (loading) return <div>Loading...</div>; 

    return (
        <div className="popular-cars">
            <h2 className="header">Popular Cars</h2>
            <div className="car-filters">
                {['All', 'Sedan', 'SUV', 'EV', 'Crossover'].map(type => (
                    <button
                        key={type}
                        className={`filter-button ${filter === type ? 'active' : ''}`}
                        onClick={() => setFilter(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="car-grid">
                {filteredCars.map(car => (
                    <div key={car.id} className="car-card">
                        <img src={car.image} alt={car.name} />
                        <div className="car-info">
                            <h2>{car.price} ks/day</h2>
                            <p>{car.name}</p>
                            <p>{car.type}</p>
                        </div>
                        
                        <button className="details-button"><span>See Details</span></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCars;
