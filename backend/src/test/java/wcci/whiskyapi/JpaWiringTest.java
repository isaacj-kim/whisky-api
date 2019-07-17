package wcci.whiskyapi;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest

public class JpaWiringTest {

	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	WhiskyTypeRepository whiskyTypeRepo;
	
//	@Autowired
//	WhiskyBrandRepository whiskyBrandRepo;
//	
//	@Autowired
//	WhiskyLabelRepository whiskyLabelRepo;

	private WhiskyType testWhiskyType = new WhiskyType("Irish Whisky");
	
	@Before
	public void saveTestEntitiesToRepos() {
		whiskyTypeRepo.save(testWhiskyType);
		
		entityManager.flush();
		entityManager.clear();
	}
	
	
	
	@Test
	public void shouldSaveAndLoadWhiskyType() {
		WhiskyType foundWhiskyType = whiskyTypeRepo.findById(testWhiskyType.getId()).get();
		assertThat(foundWhiskyType, is(testWhiskyType));
	}
	

	
}
