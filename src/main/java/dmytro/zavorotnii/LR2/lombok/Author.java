package dmytro.zavorotnii.LR2.lombok;

public class Author {
    private int id;
    private String name;
    private String surname;
    private final String birthPlace;

    // @NoArgsConstructor
    public Author() {
        this.birthPlace = null;
    }

    // @AllArgsConstructor
    public Author(int id, String name, String surname, String birthPlace) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthPlace = birthPlace;
    }

    // @RequiredArgsConstructor
    public Author(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getBirthPlace() {
        return birthPlace;
    }
}
