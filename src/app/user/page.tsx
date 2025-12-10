
type UserListProps = {
    id: number;
    name: string;
};

//fatch diretamente do componente
async function fetchUsers(): Promise<UserListProps[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Isabele' },
                { id: 2, name: 'Ronaldo' },
            ]);
        }, 4000);
    });
};

async function UserList() {

    const userList = await fetchUsers();
    console.log('Server', userList);
    return (
        <div className="mt-10 text-white">
            {userList.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
};

export default function Loading() {
    return (
        <>
            <h2 className="text-white">User List</h2>
            <UserList />
        </>
    );
};