import { h } from "preact";

const Alert = ({ msgs, type }) => {
    return (
        msgs.length !== 0 ? (
            <div class={`alert alert-${type}`} role="alert">
                <ul style={{ margin: 0 }}>
                    {msgs.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
                </ul>
            </div>
        ) : null
    );
};

export const Success = ({ responces }) => <Alert type="success" msgs={responces} />;

export const Errors = ({ errors }) => <Alert type="danger" msgs={errors} />;
