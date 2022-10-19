function showModal(message) {
    const hasModal = document.getElementById('showModal');

    if (!hasModal) {
        const newModal = `<div class="modal fade" id="showModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">${message.title}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>${message.message}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onclick="window.location.href = '${message.redirect}'">${message.button}</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        const body = document.querySelector('body');
        body.innerHTML += newModal;

        const hasModal = document.getElementById('showModal');
        const modal = new bootstrap.Modal(hasModal);
        modal.toggle();

        setTimeout(() => {
            modal.hide();
        }, 5000);
    } else {
        const modal = new bootstrap.Modal(hasModal);
        modal.toggle();

        setTimeout(() => {
            modal.hide();
        }, 5000);
    };
};

function showToast(message) {
    const hasToast = document.getElementById('showToast ');

    if (!hasToast) {
        const newToast = `<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
                            <div id="showToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png" width="16" height="16" class="rounded me-2" alt="...">
                                    <strong class="ml-2 me-auto">${message.title}</strong>
                                    <small class="text-muted">11 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body">
                                    ${message.message}
                                </div>
                            </div>
                        </div>`;

        const body = document.querySelector('body');
        body.innerHTML += newToast;

        const hasToast = document.getElementById('showToast');
        const toast = new bootstrap.Toast(hasToast);
        toast.show();

        setTimeout(() => {
            toast.hide();
        }, 5000);
    } else {
        const toast = new bootstrap.Toast(hasToast);
        toast.show();

        setTimeout(() => {
            toast.hide();
        }, 5000);
    };
};