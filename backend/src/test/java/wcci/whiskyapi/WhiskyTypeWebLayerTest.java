package wcci.whiskyapi;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(WhiskyTypeController.class)
@RunWith(SpringRunner.class)
public class WhiskyTypeWebLayerTest {

	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	WhiskyTypeRepository whiskyTypeRepo;
	
	private WhiskyType testWhiskyType;
	private ObjectMapper mapper = new ObjectMapper();
	
	@Before
	public void setup() {
		testWhiskyType = new WhiskyType("");
	}	
		
	@Test
	public void fetchCollectionOfWhiskyTypes() throws Exception {
		when(whiskyTypeRepo.findAll()).thenReturn(Collections.singletonList(testWhiskyType));
		mockMvc.perform(get("/api/types"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(content().contentType("application/json;charset=UTF-8"))
		.andExpect(content().json(mapper.writeValueAsString(Collections.singletonList(testWhiskyType)),true));
	}
	
	@Test
	public void fetchSingleWhiskyTypes() throws Exception {
		when(whiskyTypeRepo.findById(1L)).thenReturn(Optional.of(testWhiskyType));
		mockMvc.perform(get("/api/types/1"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(content().contentType("application/json;charset=UTF-8"))
		.andExpect(content().json(mapper.writeValueAsString(testWhiskyType),true));
		
	}
	
	
	
}
