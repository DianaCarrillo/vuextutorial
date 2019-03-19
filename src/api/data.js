const students = [
    {
        'id' : 1,
        'name':'Cit',
        'games': ['Coder', 'Design', 'Kawaii'],
        'selected': false
    },
    {
        'id' : 2,
        'name':'Majo',
        'games': ['Tennis', 'Code', 'Eat'],
        'selected': false
    },
    {
        'id' : 3,
        'name':'Saku',
        'games': ['Work', 'UX', 'Sleep'],
        'selected': false
    },
    {
        'id' : 4,
        'name':'Yoce',
        'games': ['Study', 'Work', 'Lovely'],
        'selected': false
    },
    {
        'id' : 5,
        'name':'Gen',
        'games': ['Code', 'Chef', 'Chingona'],
        'selected': false
    },
    {
        'id' : 6,
        'name':'Diana',
        'games': ['Coder', 'Psichologyst', 'Cat-lover'],
        'selected': false
    },
]

export default {
    getStudents() {
       return students;
    }
}