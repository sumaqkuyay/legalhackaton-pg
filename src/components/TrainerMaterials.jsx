import React from 'react';
import '../sass/styleComponents/_TrainerMaterials.scss';
import ImageLink from "../images/link_img.png"

class TrainerMaterials extends React.Component {

    render() {

        return (
            <div>
                <div className="Links-container">
                    <div>
                        <h1>FY1920</h1>
                    </div>
                    <div className="Description-link">
                        <div className="Link-title">
                            <img src={ImageLink} alt="Imagen de un link" />
                            <p>Link del formulario de asistentes</p>
                        </div>
                        <input type="text" name="" id="" placeholder="Copia el link aquí" />
                    </div>
                    <div className="Description-link">
                        <div className="Link-title">
                            <img src={ImageLink} alt="Imagen de un link" />
                            <p>Link del PPT</p>
                        </div>
                        <input type="text" name="" id="" placeholder="Copia el link aquí" />
                    </div>
                </div>
            </div>

        )
    }
}
export default TrainerMaterials;