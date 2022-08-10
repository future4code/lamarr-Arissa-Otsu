
export const returnToLastPage = (navigate) => {
    navigate(-1)
}

export const goToCreateTripPage = (navigate) => {
    navigate ("/admin/trips/create")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}