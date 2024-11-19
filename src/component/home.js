import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const getCategories = async () => {
        try {
            let response = await fetch(
                `https://v1.nocodeapi.com/omambure/spotify/lJWDshZvgpudURMR/browse/categories?country=India&locale=hindi`
            );
            let converted_data = await response.json();
            setCategories(converted_data.categories.items); // Update state with categories data
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        navigate(`/playlist/${categoryId}`);
    };

    return (
        <div style={{ marginTop: 100 }}>
            <Container>
                <Row className="mt-5">
                    {categories.map((element) => (
                        <Col key={element.id} sm={12} md={4} className="text-center mb-4">
                            <div
                                className="artist-card position-relative rounded border border-secondary"
                                style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                                onClick={() => handleCategoryClick(element.id)}
                            >
                                {element.icons && element.icons.length > 0 && (
                                    <img
                                        src={element.icons[0].url}
                                        alt={element.name}
                                        className="img-fluid rounded-circle"
                                    />
                                )}
                                <h5 className="mt-2 text-white">{element.name}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Categories;
