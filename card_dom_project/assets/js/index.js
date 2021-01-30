const users = [
    {   
        id: 1;
        name: 'name1';
        surname: 'surname1';
        imageSrc: '#';
    },
    {   
        id: 2;
        name: 'name2';
        surname: 'surname2';
        imageSrc: '#';
    },
    {   
        id: 3;
        name: 'name3';
        surname: 'surname3';
        imageSrc: '#';
    }
];

// 
const userListElem = document.getElementById('userList');

// 
users.forEach(
    (user) => {
        userListElem.append(creteUserListElem(user));
    }
);

// 
function creteUserListElem(user){
    // 
    const userListItemElem = document.createElement("li");
    
    // 
    const userCardWraperElem = document.createElement('div');
    
    // 
    userCardWraperElem.classList.add('userCardWrapper');
    
    // 
    const userImageContainerElem = document.createElement('div');
    userImageContainerElem.classList.add('userImageContainer');
    
    // 
    const userImageElem = document.createElement('img');
    userImageElem.classList.add('userImage');
    userImageElem.setAttribute('src', user.imageSrc);
    userImageElem.setAttribute('alt', 'user photo');
    
    //
    userImageContainerElem.append(userImageElem);
    
    // 
    userCardWraperElem.append(userImageContainerElem);
    
    // 
    const userFullNameElem = document.createElement('h1');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;
    userCardWraperElem.append(userFullNameElem);

    // 
    userImageElem.append(userCardWraperElem);

    // 
    userListItemElem.setAttribute("id", user.id);

    // 
    return userListElem;
};