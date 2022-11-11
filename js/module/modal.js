function showModal(message) {
    const modalDate = { close: false, ...message };

    const hasModal = document.getElementById('showModal');

    if (!hasModal) {
        const newModal = `<div class="modal fade" id="showModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">${modalDate.title}</h5>
                                        ${modalDate.close ? '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' : ''}
                                    </div>
                                    <div class="modal-body">
                                        <p>${modalDate.message}</p>
                                    </div>
                                    <div class="modal-footer">
                                       ${!!modalDate.redirect ?
                `<button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onclick="window.location.href = '${modalDate.redirect}'">${modalDate.button}</button>`
                : `<button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">${modalDate.button}</button>`} 
                                    </div>
                                </div>
                            </div>
                        </div>`;

        const body = document.querySelector('body');
        body.innerHTML += newModal;

        const hasModal = document.getElementById('showModal');
        const modal = new bootstrap.Modal(hasModal);
        modal.toggle();

    } else {
        const modal = new bootstrap.Modal(hasModal);
        modal.toggle();
    };
};

function showToast(message) {
    const hasToast = document.getElementById('showToast');

    if (!hasToast) {
        const newToast = `<div class="p-3" style="z-index: 999; position: fixed; bottom: 0; right: 0;">
                            <div id="showToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                    <img src="${message.img}" width="16" height="16" class="rounded me-2" alt="...">
                                    <strong class="ml-2 me-auto">${message.title}</strong>
                                    <small class="text-muted">11 mins ago</small>
                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body">
                                    ${message.message}
                                </div>
                            </div>
                        </div>`;

        if(!!message.redirect) window.location.href = message.redirect;

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


export { showModal, showToast}