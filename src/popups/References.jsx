import Modal from "../components/Modal";

const References = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>
            <h2 className="mb-5 text-[32px] font-bold">
                References
            </h2>

            <ul className="list-decimal pl-6">
                <li>Lorem ipsum dolor sit amet consectetur. Mauris id porta quis morbi egestas praesent senectus tincidunt. Arcu fermentum aliquam sodales nibh odio vivamus
                    diam. Fames pellentesque id quis diam maecenas nunc at. Egestas amet sed sollicitudin urna tortor vel ut.
</li>
                <li>Lorem ipsum dolor sit amet consectetur. Mauris id porta quis morbi egestas praesent senectus tincidunt. Arcu fermentum aliquam sodales nibh odio vivamus
                    diam.

</li>

                <li>Lorem ipsum dolor sit amet consectetur. Mauris id porta quis morbi egestas praesent senectus tincidunt. Arcu fermentum aliquam sodales nibh odio vivamus
                    diam. Fames pellentesque id quis diam maecenas nunc at. Egestas amet sed sollicitudin urna tortor vel ut</li>
            </ul>
        </Modal>
    );
};

export default References;