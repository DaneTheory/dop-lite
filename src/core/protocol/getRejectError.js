dop.core.getRejectError = function(error) {
    if (
        typeof error == 'number' &&
        dop.core.error.reject_remote[error] !== undefined
    ) {
        var args = Array.prototype.slice.call(arguments, 1)
        args.unshift(dop.core.error.reject_remote[error])
        return dop.util.sprintf.apply(this, args)
    }
    return error
}
