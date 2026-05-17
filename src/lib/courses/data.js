export const getFeatureCourses = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const data = await res.json();

    return data || [];
}

// get course data
export const getCourses = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses`);
    const data = await res.json();

    return data || [];
}

// get course data by id
export const getCourseById = async(id,token)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`,{
        headers: {
            authorization : `Bearer ${token}` || ""
        }
    })
    const data = await res.json();

    return data || "";
}
