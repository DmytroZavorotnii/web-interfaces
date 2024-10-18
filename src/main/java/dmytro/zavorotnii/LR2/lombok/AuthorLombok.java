package dmytro.zavorotnii.LR2.lombok;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor(force = true)
@AllArgsConstructor
@RequiredArgsConstructor
public class AuthorLombok {
    private int id;
    private String name;
    @Setter(AccessLevel.PROTECTED)
    private String surname;
    private final String birthPlace;
}
