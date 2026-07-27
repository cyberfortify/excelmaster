from app.utils.security import hash_password
from app.utils.security import verify_password

password = "Password123"

hashed = hash_password(password)

print("Hashed Password:")
print(hashed)

print()

print(
    verify_password(
        password,
        hashed
    )
)