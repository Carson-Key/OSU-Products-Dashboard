// Helpers
import { APIs, AddURL } from '../../helpers/statusAPIObjects.js'

const Add = () => {
    const defaultAPISArray = Object.keys(APIs)

	return (
        <div className="flex flex-wrap justify-evenly">
            <form className="w-2/3 flex flex-wrap justify-evenly">
                {
                    defaultAPISArray.map((api, i) => {
                        if (APIs[api].link === AddURL) {
                            return <></>
                        } else {
                            return (
                                <label className="mx-4">
                                    {api}
                                    <input
                                        name={api}
                                        type="checkbox"
                                    />
                                </label>
                            )
                        }
                    })
                }
            </form>
        </div>
	)
}

export default Add
