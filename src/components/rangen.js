import flist from "./flist";

const Ran = () => {
    const valz =[]

    for (let index = 0; index < 10; index++) {
        valz.push(Math.floor(Math.random() * flist.length));
    }

    return (
        <div>
            <div>
                {valz.map((smth) => (<div>
                    <p>
                        {flist[smth].id}
                    </p>
                    <img src={"https://drive.google.com/uc?id="+flist[smth].id}></img></div>
                ))}
            </div>
        </div>
    )
}

export default Ran;