function isIncludeAdmin() {
    if (location.pathname.startsWith("/admin")) {
        return '/admin';
    }
    return '';
}

export {
    isIncludeAdmin
}