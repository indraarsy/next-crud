import { Transition } from "@headlessui/react";

const { Component } = require("react");

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: null,
        };

        this.cancelClick = this.cancelClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            isOpen: true,
        });
    }

    cancelClick() {
        this.setState({
            isOpen: false,
        });

        setTimeout(() => this.props.closeModal(), 200);
    }

    render() {
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition
                        show={this.state.isOpen}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {(ref) => (
                            <div
                                ref={ref}
                                className="fixed inset-0 transition-opacity"
                            >
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                        )}
                    </Transition>
                    <span className=" sm:inline-block sm:align-middle sm:h-screen"></span>
                    &#8203;
                    <Transition
                        show={this.state.isOpen}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        {(ref) => (
                            <div
                                ref={ref}
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3
                                                className="text-lg leading-6 font-medium text-gray-900"
                                                id="modal-headline"
                                            >
                                                Deactivate account
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm leading-5 text-gray-500">
                                                    Are you sure you want to
                                                    deactivate your account? All
                                                    of your data will be
                                                    permanently removed. This
                                                    action cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        >
                                            Deactivate
                                        </button>
                                    </span>
                                    <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                        <button
                                            onClick={this.cancelClick}
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        >
                                            Cancel
                                        </button>
                                    </span>
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
        );
    }
}

export default ModalUser;
