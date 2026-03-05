package sport.example.sport.example.Entity;



import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    private String name;

    private String provider; // GOOGLE

    private String role; // USER / ADMIN

    // getters & setters
}
